/* Phase 9 shots, 2026-08-22. The two built pieces at 360, 768 and 1280, with
   the assertion set the BT session used in shots-2026-08-20b.cjs:

     1. the capture is taken at the viewport its own filename declares
        (page.viewportSize().width === the number in the name),
     2. the PNG's pixel width equals viewport x DPR,
     3. no two files in a family share a pixel width.

   The capture-only nav neutraliser from shots-2026-08-20b.cjs is carried
   forward for the same measured reason recorded there: .ai-nav is
   position:fixed, and Playwright stitches a tall full-page capture from
   viewport-sized segments, so the fixed band repaints in each one and paints
   over content that is not overlapped on the live page. The two declarations
   are injected per page after load and live only in this script; nothing on
   the page is changed.

   NAME OVERLAP, DELIBERATE AND LOGGED. These six filenames are the same six
   _tools/check.js builds from its own slugs. That is not the Phase 4 defect,
   which was two scripts photographing DIFFERENT subjects into one name: here
   both producers photograph the same page at the same three widths, and this
   script runs last so the file on disk is the asserted one. It is recorded in
   the session report rather than left for someone to find.

   CAN detect: a wrong viewport, a wrong PNG width, a width collision inside a
   family, and a page that failed to load.
   CANNOT detect: whether the page LOOKS right. These are width and presence
   assertions, not design review. The review is AMA's, off the images. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reports/shots';
const DPR=2;
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
const PAGES=[
  {slug:'pieces-concert-tax',      url:'/pieces/concert-tax/'},
  {slug:'pieces-fast-food-sodium', url:'/pieces/fast-food-sodium/'},
];
const pngSize=f=>{const b=fs.readFileSync(f).subarray(16,24);
  return{w:b.readUInt32BE(0),h:b.readUInt32BE(4),bytes:fs.statSync(f).size};};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const fails=[],made=[];
  for(const P of PAGES){
    for(const W of [360,768,1280]){
      const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:DPR});
      const page=await ctx.newPage();
      const res=await page.goto(`http://127.0.0.1:${port}${P.url}`,{waitUntil:'load'});
      if(!res||res.status()!==200){fails.push(`${P.slug}@${W}: page returned ${res?res.status():'no response'}`);await ctx.close();continue;}
      await page.addStyleTag({content:'.ai-nav{position:static}.has-nav{padding-top:0}'});
      await page.evaluate(()=>document.fonts.ready);
      await page.waitForTimeout(400);

      const laid=await page.evaluate(()=>{const e=document.querySelector('.ai-tabs[role=tablist]');
        return e?e.getBoundingClientRect().height:0;});
      if(!laid)fails.push(`${P.slug}@${W}: the tab bar laid out at height 0 — the shot would show nothing`);

      const name=`${P.slug}-${W}.png`;
      const declared=Number(name.match(/-(\d+)\.png$/)[1]);
      const vp=page.viewportSize().width;
      if(vp!==declared){fails.push(`${name}: viewport ${vp} != ${declared} in the filename`);await ctx.close();continue;}
      const f=path.join(OUT,name);
      await page.screenshot({path:f,fullPage:true});
      const s=pngSize(f);
      if(s.w!==vp*DPR)fails.push(`${name}: png width ${s.w} != viewport ${vp} x DPR ${DPR}`);
      made.push({family:P.slug,name,declared,viewport:vp,...s});
      console.log(`  ${name.padEnd(34)} viewport ${String(vp).padStart(4)}  ${String(s.w).padStart(4)} x ${String(s.h).padEnd(6)}  ${String(s.bytes).padStart(8)} bytes  tabbar ${laid}`);
      await ctx.close();
    }
  }
  const fams={};made.forEach(m=>{(fams[m.family]=fams[m.family]||[]).push(m);});
  for(const[k,list]of Object.entries(fams)){
    const seen={};
    for(const m of list){
      if(seen[m.w]!==undefined&&seen[m.w]!==m.declared)
        fails.push(`COLLISION ${k}: ${seen[m.w]} and ${m.declared} both produced ${m.w}px wide`);
      seen[m.w]=m.declared;
    }
    console.log(`\nfamily ${k}: widths ${list.map(m=>m.w).join(', ')} — ${new Set(list.map(m=>m.w)).size} distinct of ${list.length}`);
  }
  console.log(`\nfiles written: ${made.length}`);
  console.log(fails.length?'SHOT FAILURES:\n  '+fails.join('\n  '):`SHOT ASSERTIONS PASSED: ${made.length} files, ${made.length} asserted viewports, no width collisions`);
  await b.close();srv.close();
  process.exitCode=(fails.length||made.length!==6)?1:0;
})();

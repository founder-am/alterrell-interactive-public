/* Sodium Picker shots, 2026-08-20. Phase 9. Same assertion set as the
   corrected concert script (shots-2026-08-20b.cjs): a capture must be taken
   at the viewport its own filename declares, its PNG pixel width must equal
   viewport x DPR, and no two files in a state family may share a pixel width.

   The picker is on the Compare tab, which is display:none until clicked, so
   the tab is clicked before any capture — a hidden element photographs as
   nothing and the width assertions would still pass on it. The picker's own
   grids are asserted non-zero-height for that reason.

   CAN detect: a wrong viewport, a wrong PNG width, a width collision between
   two files that should differ, and a picker that did not lay out at all.
   CANNOT detect: whether the page LOOKS right. These are width and presence
   assertions, not design review. The review is AMA's, off the images. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reports/shots';
const DPR=2;
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
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
  for(const W of [360,768,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:DPR});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/fast-food-sodium/`,{waitUntil:'load'});
    await page.click('[data-target="tab-compare"]');
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(400);

    const laid=await page.evaluate(()=>{const e=document.querySelector('.ai-sodium-picker');
      return e?e.getBoundingClientRect().height:0;});
    if(!laid){fails.push(`@${W}: .ai-sodium-picker laid out at height 0 — the shot would show nothing`);}

    /* Renamed 2026-08-22, ruled by AMA that date. This was
       pieces-fast-food-sodium-${W}.png, which is byte-for-byte the filename
       _tools/check.js builds at line 1061 from its own slug
       (`${slug}-${w}.png`, slug "pieces-fast-food-sodium") into the same
       directory. Whichever of the two ran second silently overwrote the
       other's three files. check.js is not edited; this script's output moves. */
    const name=`sodium-eyebrow-${W}.png`;
    const declared=Number(name.match(/-(\d+)\.png$/)[1]);
    const vp=page.viewportSize().width;
    if(vp!==declared){fails.push(`${name}: viewport ${vp} != ${declared} in the filename`);await ctx.close();continue;}
    const f=path.join(OUT,name);
    await page.screenshot({path:f,fullPage:true});
    const s=pngSize(f);
    if(s.w!==vp*DPR)fails.push(`${name}: png width ${s.w} != viewport ${vp} x DPR ${DPR}`);
    made.push({name,declared,...s});
    console.log(`  ${name.padEnd(36)} viewport ${String(vp).padStart(4)}  ${String(s.w).padStart(4)} x ${String(s.h).padEnd(6)}  ${s.bytes} bytes  picker height ${laid}`);
    await ctx.close();
  }
  const seen={};
  for(const m of made){
    if(seen[m.w]!==undefined&&seen[m.w]!==m.declared)
      fails.push(`COLLISION: ${seen[m.w]} and ${m.declared} both produced ${m.w}px wide`);
    seen[m.w]=m.declared;
  }
  console.log(`\nfiles written: ${made.length}`);
  console.log(fails.length?'SHOT FAILURES:\n  '+fails.join('\n  '):'SHOT ASSERTIONS PASSED: 3 files, 3 asserted viewports, no width collisions');
  await b.close();srv.close();
  process.exitCode=(fails.length||made.length!==3)?1:0;
})();

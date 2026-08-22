/* BW PHASE 4 — the two affected tables, at 360/768/1280.
 *
 * Same assertion set as bt-shots-sodium-2026-08-20.cjs and shots-2026-08-20b.cjs:
 * a capture is taken at the viewport its own filename declares, its PNG pixel
 * width must equal viewport x DPR, and no two files may share a pixel width.
 * Distinct filenames, so nothing BT wrote is overwritten.
 *
 * The affected tables are on tab-the-system, which is display:none until
 * clicked, so the tab is clicked before any capture and the first .ai-table is
 * asserted non-zero-height — a hidden table photographs as nothing and the
 * width assertions would still pass on it.
 *
 * CAN detect: a wrong viewport, a wrong PNG width, a width collision, and a
 * table that did not lay out at all.
 * CANNOT detect: whether the columns LOOK aligned. That is AMA's review, off
 * the images; the computed text-align readout is the machine evidence. */
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
    await page.addStyleTag({content:'.ai-nav{position:static}.has-nav{padding-top:0}'}); // capture only, see shots-2026-08-20b.cjs
    await page.click('[data-target="tab-the-system"]');
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(400);

    const laid=await page.evaluate(()=>{const e=document.querySelector('#tab-the-system .ai-table');
      return e?e.getBoundingClientRect().height:0;});
    if(!laid){fails.push(`@${W}: first .ai-table on tab-the-system laid out at height 0`);}

    const name=`sodium-numeric-tables-${W}.png`;
    const declared=Number(name.match(/-(\d+)\.png$/)[1]);
    const vp=page.viewportSize().width;
    if(vp!==declared){fails.push(`${name}: viewport ${vp} != ${declared} in the filename`);await ctx.close();continue;}
    const f=path.join(OUT,name);
    // Full viewport width over the two tables' combined vertical extent.
    const box=await page.evaluate(()=>{const ws=[...document.querySelectorAll('#tab-the-system .ai-table-wrap')];
      const a=ws[0].getBoundingClientRect(), z=ws[ws.length-1].getBoundingClientRect();
      return{top:a.top+scrollY, height:(z.bottom+scrollY)-(a.top+scrollY)};});
    await page.screenshot({path:f,fullPage:true,
      clip:{x:0,y:Math.max(0,box.top-24),width:vp,height:box.height+48}});
    const s=pngSize(f);
    if(s.w!==vp*DPR)fails.push(`${name}: png width ${s.w} != viewport ${vp} x DPR ${DPR}`);
    made.push({name,declared,...s});
    console.log(`  ${name.padEnd(34)} viewport ${String(vp).padStart(4)}  ${String(s.w).padStart(4)} x ${String(s.h).padEnd(6)}  ${s.bytes} bytes  table height ${laid.toFixed(1)}`);
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

/* Shots for AMA, correction pass 2026-08-20. Replaces shots-2026-08-20.cjs.
 *
 * WHY THIS SCRIPT EXISTS. The previous script clipped the two builder states to
 * the .ai-concert element. .ai-concert is capped at var(--max-tool) = 680px, so
 * at 768 and at 1280 the element is the same 580.47px wide and the two PNGs
 * came out at an identical 1360px. The builder was correct; the CAMERA was
 * wrong, and the old acceptance line counted nine files without ever asking how
 * wide any of them was. The builder states are now clipped to a rect that spans
 * the FULL viewport width over the builder's vertical extent, so the shot
 * carries the measure and the left edge AMA is reviewing.
 *
 * WHAT THE ASSERTIONS CAN DETECT: a capture taken at a viewport that does not
 * match its filename; a PNG whose pixel width does not equal viewport x DPR;
 * two files in the same state whose pixel widths collide.
 * WHAT THEY CANNOT DETECT: whether the page LOOKS right. A shot can be the
 * correct width and still show a broken layout. These are width assertions,
 * not design review. The review is AMA's, off the images.
 */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reports/shots';
const DPR=2;
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
const pick=async(p,d,c,s)=>{for(const[k,v]of[['dancers',d],['costumes',c],['staging',s]])
  await p.click(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);};
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
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    await page.click('[data-target="tab-the-data"]');
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(400);

    const shot=async(name,clipToBuilder)=>{
      const declared=Number(name.match(/-(\d+)\.png$/)[1]);
      const vp=page.viewportSize().width;
      if(vp!==declared){fails.push(`${name}: viewport ${vp} != ${declared} in the filename`);return;}
      const f=path.join(OUT,name);
      if(clipToBuilder){
        // Full viewport width, builder's vertical extent. NOT the element box:
        // the element is max-tool-capped and would collide at 768 and 1280.
        const box=await page.evaluate(()=>{const r=document.querySelector('.ai-concert').getBoundingClientRect();
          return{top:r.top+window.scrollY,height:r.height};});
        await page.screenshot({path:f,fullPage:true,
          clip:{x:0,y:Math.max(0,box.top-24),width:vp,height:box.height+48}});
      } else {
        await page.screenshot({path:f,fullPage:true});
      }
      const s=pngSize(f);
      if(s.w!==vp*DPR)fails.push(`${name}: png width ${s.w} != viewport ${vp} x DPR ${DPR}`);
      made.push({name,declared,viewport:vp,...s});
      console.log(`  ${name.padEnd(34)} viewport ${String(vp).padStart(4)}  ${String(s.w).padStart(4)} x ${String(s.h).padEnd(6)}  ${s.bytes} bytes`);
    };
    await shot(`concert-tax-${W}.png`,false);
    await pick(page,'full','none','minimal'); await page.waitForTimeout(150);
    await shot(`concert-builder-empty-${W}.png`,true);
    await pick(page,'full','many','max'); await page.waitForTimeout(150);
    await shot(`concert-builder-occupied-${W}.png`,true);
    await ctx.close();
  }
  // Collision check, per state family. Different declared width, same pixels = FAIL.
  const fams={};made.forEach(m=>{const k=m.name.replace(/-\d+\.png$/,'');(fams[k]=fams[k]||[]).push(m);});
  for(const[k,list]of Object.entries(fams)){
    const seen={};
    for(const m of list){
      if(seen[m.w]!==undefined&&seen[m.w]!==m.declared)
        fails.push(`COLLISION ${k}: ${seen[m.w]} and ${m.declared} both produced ${m.w}px wide`);
      seen[m.w]=m.declared;
    }
  }
  console.log(`\nfiles written: ${made.length}`);
  console.log(fails.length?'SHOT FAILURES:\n  '+fails.join('\n  '):'SHOT ASSERTIONS PASSED: 9 files, 9 asserted viewports, no width collisions');
  await b.close();srv.close();
  process.exitCode=(fails.length||made.length!==9)?1:0;
})();

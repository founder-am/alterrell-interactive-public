/* Shots for AMA: concert-tax on tab-the-data (both ticket tables and the
   Concert Builder live there) at the three checked widths, plus the builder
   in each of its two result states so the copy is reviewable, not inferred. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reports/shots';
const pick=async(p,d,c,s)=>{for(const[k,v]of[['dancers',d],['costumes',c],['staging',s]])
  await p.click(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  for (const W of [360,768,1280]) {
    const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:2});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    await page.click('[data-target="tab-the-data"]');
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(300);
    const shot=async(name,el)=>{const f=path.join(OUT,name);
      await (el?page.locator(el):page).screenshot({path:f,fullPage:el?undefined:true});
      console.log(`  ${name}  ${fs.statSync(f).size} B`);};
    await shot(`concert-tax-${W}.png`);
    // unoccupied: 15+ dancers, 0 changes, Minimal staging -> branch A
    await pick(page,'full','none','minimal'); await page.waitForTimeout(120);
    await shot(`concert-builder-empty-${W}.png`,'.ai-concert');
    // occupied: 15+ dancers, 10+ changes, Spectacle -> 6 records
    await pick(page,'full','many','max'); await page.waitForTimeout(120);
    await shot(`concert-builder-occupied-${W}.png`,'.ai-concert');
    await ctx.close();
  }
  await b.close(); s.close();
})();

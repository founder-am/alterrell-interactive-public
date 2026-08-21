/* M3 shots: concert-tax on tab-the-data, where both ticket-split tables live,
   at the three checked widths. Full page so AMA sees the table in context. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reports/shots';
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
    const f=path.join(OUT,`concert-tax-${W}.png`);
    await page.screenshot({path:f,fullPage:true});
    console.log(`wrote ${f}  (${fs.statSync(f).size} B)`);
    await ctx.close();
  }
  await b.close(); s.close();
})();

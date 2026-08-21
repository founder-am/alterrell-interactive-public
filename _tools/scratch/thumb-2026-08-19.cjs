const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:2});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.click('[data-target="tab-the-data"]'); await page.waitForTimeout(100);
  await page.evaluate(()=>{const i=document.getElementById('ai-ticket-price');
    i.value='262'; i.dispatchEvent(new Event('input',{bubbles:true}));});
  const el = await page.$('#ai-ticket-price');
  await el.screenshot({ path: process.argv[2] });
  await b.close(); s.close();
})();

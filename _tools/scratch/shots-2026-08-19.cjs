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
  const url=`http://127.0.0.1:${port}/pieces/concert-tax/`;
  const jobs=[
    { tab:'tab-share',    sel:'.ai-share-card',      out:process.argv[2] },
    { tab:'tab-the-data', sel:'#ai-ticket-price',    out:process.argv[3] }
  ];
  let bad=0;
  for (const j of jobs) {
    const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:2});
    const page=await ctx.newPage();
    await page.goto(url,{waitUntil:'load'});
    await page.click(`[data-target="${j.tab}"]`);
    await page.waitForTimeout(120);
    await page.$eval(j.sel, el => el.scrollIntoView({block:'center', behavior:'instant'}));
    await page.waitForTimeout(250);
    await page.waitForTimeout(120);
    const chk = await page.$eval(j.sel, el => {
      const r = el.getBoundingClientRect();
      return { w:+r.width.toFixed(1), h:+r.height.toFixed(1), top:+r.top.toFixed(1), bottom:+r.bottom.toFixed(1),
               intersects: r.bottom > 0 && r.top < window.innerHeight && r.width > 0 && r.height > 0 };
    });
    console.log(`${j.tab} ${j.sel}  rect ${chk.w}x${chk.h}  top ${chk.top} bottom ${chk.bottom}  intersects viewport: ${chk.intersects}`);
    if (!chk.w || !chk.h || !chk.intersects) { console.log('  STOP: target is zero-size or off-viewport, not writing a blank frame'); bad++; await ctx.close(); continue; }
    await page.screenshot({ path: j.out, fullPage: true });
    await ctx.close();
  }
  await b.close(); s.close();
  process.exit(bad?1:0);
})();

/* BW PHASE 2 — nav band, READ ONLY. Measures the live page. Writes nothing.
 *
 * WHAT THIS CAN DETECT: whether, at 360 with the Concert Builder scrolled into
 * view, the nav's border box and the first .ai-concert-step's border box share
 * any pixels in viewport coordinates. It reports raw rects, not a verdict about
 * appearance.
 * WHAT IT CANNOT DETECT: visual occlusion by anything other than these two
 * boxes; whether a reader would call the result "broken"; overlap at any
 * viewport other than 360; overlap at a scroll offset it did not test.
 */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:2});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.click('[data-target="tab-the-data"]');
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(400);

  // Scroll so the Concert Builder is in view. scrollIntoView, then settle.
  await page.evaluate(()=>{document.querySelector('.ai-concert').scrollIntoView({block:'center'});});
  await page.waitForTimeout(400);

  const out = await page.evaluate(()=>{
    const nav  = document.querySelector('.ai-nav');
    const step = document.querySelector('.ai-concert-step');
    const tabs = document.querySelector('.ai-tabs');
    const cs   = getComputedStyle(nav);
    const rect = e => { const r=e.getBoundingClientRect();
      return {top:+r.top.toFixed(2),right:+r.right.toFixed(2),bottom:+r.bottom.toFixed(2),
              left:+r.left.toFixed(2),width:+r.width.toFixed(2),height:+r.height.toFixed(2)}; };
    const n=rect(nav), s=rect(step), t=rect(tabs);
    const overlap=(a,b)=>!(a.right<=b.left||b.right<=a.left||a.bottom<=b.top||b.bottom<=a.top);
    return {
      scrollY: window.scrollY,
      nav:{position:cs.position, zIndex:cs.zIndex, top:cs.top, height:cs.height, rect:n},
      tabs:{position:getComputedStyle(tabs).position, zIndex:getComputedStyle(tabs).zIndex,
            top:getComputedStyle(tabs).top, rect:t},
      step:{rect:s, text:(step.textContent||'').trim().slice(0,60)},
      navVsStep: overlap(n,s),
      navVsTabs: overlap(n,t),
      tabsVsStep: overlap(t,s),
      verticalGapNavBottomToStepTop: +(s.top-n.bottom).toFixed(2),
      verticalGapTabsBottomToStepTop: +(s.top-t.bottom).toFixed(2)
    };
  });
  console.log(JSON.stringify(out,null,2));
  await b.close();srv.close();
})();

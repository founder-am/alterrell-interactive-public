/* BW PHASE 2 — nav band, READ ONLY, multi-scroll. Writes nothing.
 * CAN DETECT: geometric overlap of the nav border box and the first
 * .ai-concert-step border box, in viewport coords, at four named scroll
 * positions at 360.
 * CANNOT DETECT: overlap at scroll offsets not tested; visual occlusion by any
 * other element; whether a reader would call any result a defect. */
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

  const measure = async (label) => {
    const o = await page.evaluate(()=>{
      const nav=document.querySelector('.ai-nav'), step=document.querySelector('.ai-concert-step');
      const tabs=document.querySelector('.ai-tabs'); const cs=getComputedStyle(nav);
      const rect=e=>{const r=e.getBoundingClientRect();return{top:+r.top.toFixed(2),right:+r.right.toFixed(2),
        bottom:+r.bottom.toFixed(2),left:+r.left.toFixed(2),width:+r.width.toFixed(2),height:+r.height.toFixed(2)};};
      const n=rect(nav),s=rect(step),t=rect(tabs);
      const ov=(a,b)=>!(a.right<=b.left||b.right<=a.left||a.bottom<=b.top||b.bottom<=a.top);
      // What does the browser say is actually painted at the nav's centre point?
      const hit=document.elementFromPoint(180,26);
      return{scrollY:Math.round(window.scrollY),navPos:cs.position,navZ:cs.zIndex,navTop:cs.top,
        nav:n,tabs:t,step:s,navVsStep:ov(n,s),tabsVsStep:ov(t,s),
        gapNavBottomToStepTop:+(s.top-n.bottom).toFixed(2),
        topmostElementUnderNavCentre:hit?(hit.className&&typeof hit.className==='string'?hit.className:hit.tagName):null};
    });
    console.log(`\n--- ${label} ---`);
    console.log(`scrollY ${o.scrollY} | nav position:${o.navPos} z-index:${o.navZ} top:${o.navTop}`);
    console.log(`nav  rect  ${JSON.stringify(o.nav)}`);
    console.log(`tabs rect  ${JSON.stringify(o.tabs)}`);
    console.log(`step rect  ${JSON.stringify(o.step)}`);
    console.log(`nav x step OVERLAP: ${o.navVsStep}   tabs x step OVERLAP: ${o.tabsVsStep}`);
    console.log(`gap nav.bottom -> step.top: ${o.gapNavBottomToStepTop}px`);
    console.log(`topmost element at nav centre (180,26): ${o.topmostElementUnderNavCentre}`);
    return o;
  };

  await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(300);
  await measure('A. resting position after tab activation (scrollY 0)');

  await page.evaluate(()=>document.querySelector('.ai-concert').scrollIntoView({block:'center'}));
  await page.waitForTimeout(300);
  await measure('B. builder scrollIntoView block:center');

  await page.evaluate(()=>document.querySelector('.ai-concert').scrollIntoView({block:'start'}));
  await page.waitForTimeout(300);
  await measure('C. builder scrollIntoView block:start');

  // Worst case for a fixed band: put the first step flush with the viewport top.
  await page.evaluate(()=>{const r=document.querySelector('.ai-concert-step').getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top);});
  await page.waitForTimeout(300);
  await measure('D. first .ai-concert-step forced flush to viewport top (worst case)');

  await b.close();srv.close();
})();

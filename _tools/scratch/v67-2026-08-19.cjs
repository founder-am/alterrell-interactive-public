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
  for (const W of [360,1280]) {
    const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:2});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    await page.waitForTimeout(120);
    console.log(`\n===== V6 MICRO TYPE @ ${W}px =====`);
    const v6 = await page.evaluate(()=>{
      const sels=['.ai-stamp','.ai-footer-copy','.ai-journey-cta'];
      const out=[];
      for(const sel of sels){
        const els=[...document.querySelectorAll(sel)];
        if(!els.length){out.push({sel,count:0,min:null});continue;}
        const sizes=els.map(e=>parseFloat(getComputedStyle(e).fontSize));
        out.push({sel,count:els.length,min:Math.min(...sizes),max:Math.max(...sizes)});
      }
      return out;
    });
    for(const r of v6){
      if(r.count===0){console.log(`  ${r.sel.padEnd(18)} NOT PRESENT on this page`);continue;}
      console.log(`  ${r.sel.padEnd(18)} n=${r.count}  min ${r.min}px  max ${r.max}px  -> ${r.min>=10?'PASS':'FAIL'} (floor 10px)`);
    }
    // footer separately, needs share tab open
    await page.click('[data-target="tab-share"]'); await page.waitForTimeout(120);
    const f = await page.evaluate(()=>{
      const el=document.querySelector('.ai-share-card-footer');
      const cs=getComputedStyle(el);
      return {fs:cs.fontSize, fd:cs.flexDirection, spans:[...el.querySelectorAll('span')].map(s=>parseFloat(getComputedStyle(s).fontSize))};
    });
    console.log(`  ${'.ai-share-card-footer'.padEnd(18)} ${f.fs}  spans ${JSON.stringify(f.spans)}  flex-direction ${f.fd}  -> ${parseFloat(f.fs)>=10?'PASS':'FAIL'}`);

    if(W===360){
      await page.click('[data-target="tab-the-data"]'); await page.waitForTimeout(150);
      const v7 = await page.evaluate(()=>{
        const el=document.getElementById('ai-ticket-price');
        if(!el) return {missing:true};
        const r=el.getBoundingClientRect();
        const raw=getComputedStyle(document.documentElement).getPropertyValue('--touch').trim();
        const probe=document.createElement('div');probe.style.height='var(--touch)';document.body.appendChild(probe);
        const resolved=parseFloat(getComputedStyle(probe).height);probe.remove();
        return {h:+r.height.toFixed(2), raw, resolved};
      });
      console.log(`\n===== V7 SLIDER TOUCH @ 360px =====`);
      if(v7.missing) console.log('  slider #ai-ticket-price NOT FOUND');
      else console.log(`  #ai-ticket-price height ${v7.h}px   --touch declared "${v7.raw}" resolved ${v7.resolved}px  -> ${v7.h>=v7.resolved?'PASS':'FAIL'}`);
    }
    await ctx.close();
  }
  await b.close(); s.close();
})();

/* BW PHASE 5 — measure the live .ai-share-card on pieces/concert-tax.
 * CAN DETECT: the element's computed box and every string it renders, at each
 * viewport tested. CANNOT DETECT: anything about how it will crop. */
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
  for(const W of [600,768,1200,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:800},deviceScaleFactor:1});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    const tab=await page.evaluate(()=>{const c=document.querySelector('.ai-share-card');
      const sec=c.closest('.ai-section'); const btn=document.querySelector(`[data-target="${sec.id}"]`);
      if(btn) btn.click(); return sec.id;});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(350);
    const o=await page.evaluate(()=>{
      const c=document.querySelector('.ai-share-card'); const r=c.getBoundingClientRect();
      const cs=getComputedStyle(c);
      const txt=s=>{const e=c.querySelector(s);return e?e.textContent.trim():null;};
      return{w:+r.width.toFixed(2),h:+r.height.toFixed(2),bg:cs.backgroundColor,
        strings:{eyebrow:txt('.ai-share-card-eyebrow'),num:txt('.ai-share-card-num'),
                 context:txt('.ai-share-card-context'),
                 footer:[...c.querySelectorAll('.ai-share-card-footer span')].map(s=>s.textContent.trim())}};
    });
    console.log(`viewport ${String(W).padStart(4)} (tab ${tab}) -> card box ${o.w} x ${o.h}  bg ${o.bg}  ratio ${(o.w/o.h).toFixed(3)}`);
    if(W===1280) console.log('  strings: '+JSON.stringify(o.strings,null,2).replace(/\n/g,'\n  '));
    await ctx.close();
  }
  console.log(`\nog target 1200x630 ratio ${(1200/630).toFixed(3)}`);
  await b.close();srv.close();
})();

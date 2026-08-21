/* R5 probe: footer computed box + span rect census. Uncommitted byproduct. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const W = +(process.argv[2]||360);
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:2});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.click('[data-target="tab-share"]');
  await page.waitForTimeout(120);
  const out = await page.evaluate(() => {
    const f = document.querySelector('.ai-share-card-footer');
    const card = document.querySelector('.ai-share-card');
    const cs = getComputedStyle(f);
    const ccs = getComputedStyle(card);
    const cardContent = +(card.clientWidth - parseFloat(ccs.paddingLeft) - parseFloat(ccs.paddingRight)).toFixed(2);
    const spans = [...f.querySelectorAll('span')].map((el,i) => {
      const rects=[...el.getClientRects()].map(r=>+r.width.toFixed(1));
      const es=getComputedStyle(el);
      // natural single-line width
      const probe=el.cloneNode(true); probe.style.cssText='position:absolute;white-space:nowrap;visibility:hidden;font:'+es.font+';letter-spacing:'+es.letterSpacing;
      document.body.appendChild(probe); const nat=+probe.getBoundingClientRect().width.toFixed(1); probe.remove();
      return { i, text: el.textContent.trim(), rectCount: rects.length, rectWidths: rects,
               lastRectWidth: rects[rects.length-1], clientWidth: el.clientWidth, naturalWidth: nat,
               fontSizePx: es.fontSize };
    });
    return {
      viewport: window.innerWidth,
      cardContentWidth: cardContent,
      footer: { display: cs.display, flexDirection: cs.flexDirection, gap: cs.gap,
                rowGap: cs.rowGap, columnGap: cs.columnGap,
                justifyContent: cs.justifyContent, alignItems: cs.alignItems,
                fontSize: cs.fontSize, letterSpacing: cs.letterSpacing,
                clientWidth: f.clientWidth, height: +f.getBoundingClientRect().height.toFixed(1) },
      spans
    };
  });
  console.log(JSON.stringify(out,null,2));
  await ctx.close(); await b.close(); s.close();
})();

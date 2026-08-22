/* BW PHASE 5 — render public/og/concert-tax.png from the LIVE share card.
 *
 * WHY PLAYWRIGHT AND NOT ai-card-studio. tools/ai-card-studio.html supports
 * exactly one output size: html2canvas is called at line 1391 with a hardcoded
 * {width:300, height:280, scale:1}, and the offscreen wrap at line 1382 is
 * fixed at 300x280 to match. It is a 300x280 carousel-card studio. It cannot
 * emit 1200x630, so the conditional applies and the live element is captured
 * instead.
 *
 * WHY THE CARD IS FRAMED RATHER THAN SHOT AT A DPR. The live .ai-share-card
 * measures 380 x 227.23 CSS px in its desktop form, a ratio of 1.672. The og
 * target is 1200 x 630, a ratio of 1.905. No single deviceScaleFactor maps one
 * onto the other, and clipping to the target ratio would cut 27.7 CSS px off
 * the card — which would drop part of the context sentence or the footer. So
 * the whole card is scaled up intact and centred on a 1200x630 field. The
 * field is painted var(--dark-section) #16141f, which is the card's OWN
 * background (measured: rgb(22, 20, 31)), so no new colour is introduced and
 * the card does not float on a foreign ground.
 *
 * EVERY STRING IS THE LIVE CARD'S. Nothing is authored, shortened or retyped:
 * the element is photographed where it renders, on the Share tab of
 * pieces/concert-tax. The style tag below changes placement and scale only —
 * it sets no text, and it lives in this script, never in the repo.
 *
 * CAN DETECT: that the output is exactly 1200x630 and that the card's four
 * strings are the ones the live page rendered.
 * CANNOT DETECT: whether the framing reads well at share size. That is AMA's
 * review, off the image. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const OUT=process.cwd()+'/public/og/concert-tax.png';
const OG_W=1200, OG_H=630, FIT=0.86;
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:OG_W,height:OG_H},deviceScaleFactor:1});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.evaluate(()=>{const c=document.querySelector('.ai-share-card');
    const sec=c.closest('.ai-section'); const btn=document.querySelector(`[data-target="${sec.id}"]`); if(btn) btn.click();});
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(400);

  const box=await page.evaluate(()=>{const r=document.querySelector('.ai-share-card').getBoundingClientRect();
    return{w:r.width,h:r.height};});
  const scale=Math.min(OG_W*FIT/box.w, OG_H*FIT/box.h);
  console.log(`live card box ${box.w.toFixed(2)} x ${box.h.toFixed(2)}  ->  scale ${scale.toFixed(4)}  ->  ${(box.w*scale).toFixed(1)} x ${(box.h*scale).toFixed(1)} on ${OG_W}x${OG_H}`);

  await page.addStyleTag({content:`
    html,body{background:#16141f !important;margin:0 !important;padding:0 !important;overflow:hidden !important;}
    .has-nav{padding-top:0 !important;}
    body > *{visibility:hidden !important;}
    .ai-share-card{
      visibility:visible !important;
      position:fixed !important; left:50% !important; top:50% !important;
      transform:translate(-50%,-50%) scale(${scale}) !important;
      transform-origin:center center !important;
      margin:0 !important; z-index:2147483647 !important;
    }
    .ai-share-card *{visibility:visible !important;}
  `});
  await page.waitForTimeout(300);

  const strings=await page.evaluate(()=>{const c=document.querySelector('.ai-share-card');
    const t=s=>{const e=c.querySelector(s);return e?e.textContent.trim():null;};
    return{eyebrow:t('.ai-share-card-eyebrow'),num:t('.ai-share-card-num'),context:t('.ai-share-card-context'),
           footer:[...c.querySelectorAll('.ai-share-card-footer span')].map(s=>s.textContent.trim())};});
  console.log('strings taken from the live card, verbatim:');
  console.log(JSON.stringify(strings,null,2).split('\n').map(l=>'  '+l).join('\n'));

  fs.mkdirSync(path.dirname(OUT),{recursive:true});
  await page.screenshot({path:OUT}); // viewport shot: exactly OG_W x OG_H at DPR 1
  const bb=fs.readFileSync(OUT).subarray(16,24);
  const w=bb.readUInt32BE(0),h=bb.readUInt32BE(4);
  console.log(`\nwrote ${OUT}`);
  console.log(`  ${w} x ${h}  ${fs.statSync(OUT).size} bytes`);
  if(w!==OG_W||h!==OG_H){console.log(`  FAIL: not ${OG_W}x${OG_H}`);process.exitCode=1;}
  else console.log(`  OK: matches the 1200x630 spec in public/og/README.md`);
  await b.close();srv.close();
})();

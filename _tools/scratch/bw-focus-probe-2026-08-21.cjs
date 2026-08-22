/* BW PHASE 3 — focus-ring measurement, READ ONLY on the repo. Writes no files.
 * CAN DETECT: the computed outline-color of .ai-select under real keyboard
 * focus, the computed background-color of .ai-sodium-mode-btn--on, and whether
 * the two elements are in the viewport at the same time at 360.
 * CANNOT DETECT: whether a reader perceives them as the same colour; contrast
 * against anything; any surface other than the two named. .ai-input has no
 * instance in the built site, so its value is read off a synthetic element
 * appended for the measurement and is labelled as such. */
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
  await page.goto(`http://127.0.0.1:${port}/pieces/fast-food-sodium/`,{waitUntil:'load'});
  // The picker lives on a tab; activate whichever tab contains it.
  await page.evaluate(()=>{const sec=document.querySelector('.ai-sodium-picker').closest('.ai-section');
    if(sec&&!sec.classList.contains('active')){
      const btn=document.querySelector(`[data-target="${sec.id}"]`); if(btn) btn.click();}});
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(400);
  await page.evaluate(()=>document.querySelector('.ai-sodium-picker').scrollIntoView({block:'start'}));
  await page.waitForTimeout(300);

  // Real keyboard focus on the first .ai-select.
  await page.focus('.ai-select');
  await page.waitForTimeout(200);

  const out = await page.evaluate(()=>{
    const inVP = e => { const r=e.getBoundingClientRect();
      return r.bottom>0 && r.top<innerHeight && r.right>0 && r.left<innerWidth; };
    const sel = document.querySelector('.ai-select');
    const on  = document.querySelector('.ai-sodium-mode-btn--on');
    const cs  = getComputedStyle(sel), cn = getComputedStyle(on);
    // .ai-input has no instance in the built site. Synthetic, for measurement only.
    const syn = document.createElement('input'); syn.className='ai-input';
    document.querySelector('.ai-sodium-picker').appendChild(syn); syn.focus();
    const csyn = getComputedStyle(syn);
    const synVals = {outlineColor:csyn.outlineColor, outlineStyle:csyn.outlineStyle,
                     outlineWidth:csyn.outlineWidth, outlineOffset:csyn.outlineOffset};
    syn.remove(); sel.focus();
    const r=e=>{const x=e.getBoundingClientRect();return{top:+x.top.toFixed(1),bottom:+x.bottom.toFixed(1)};};
    return {
      activeElementIsTheSelect: document.activeElement===sel,
      aiSelectFocus: {outlineColor:cs.outlineColor, outlineStyle:cs.outlineStyle,
                      outlineWidth:cs.outlineWidth, outlineOffset:cs.outlineOffset,
                      borderColor:cs.borderColor},
      aiInputFocus_SYNTHETIC: synVals,
      sodiumModeBtnOn: {backgroundColor:cn.backgroundColor, borderColor:cn.borderColor, color:cn.color},
      selectRect:r(sel), modeBtnOnRect:r(on),
      bothInViewportTogether: inVP(sel) && inVP(on),
      selectEqualsSelectedFill: cs.outlineColor===cn.backgroundColor,
      inputEqualsSelectedFill: synVals.outlineColor===cn.backgroundColor
    };
  });
  console.log(JSON.stringify(out,null,2));
  await b.close();srv.close();
})();

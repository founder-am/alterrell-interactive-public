/* Phase 3 probe, 2026-08-22. Reads .ai-ticket-slider:focus-visible's outline
   colour under REAL keyboard focus (Tab, not .focus()), and the slider thumb's
   computed background, at 360 on pieces/concert-tax.

   CAN detect: the outline-color the browser actually resolves on the focused
   element, and the thumb fill it is being read against.
   CANNOT detect: whether the two read as one colour to a person, or anything
   at a width other than 360. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2','.json':'application/json'};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:1});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.evaluate(()=>document.querySelectorAll('.ai-section').forEach(s=>s.classList.add('active')));
  await page.evaluate(()=>document.fonts.ready);
  const present=await page.evaluate(()=>!!document.querySelector('.ai-ticket-slider'));
  console.log('.ai-ticket-slider present on page: '+present);
  if(!present){await b.close();srv.close();process.exitCode=1;return;}
  // Real keyboard focus: focus the element BEFORE it, then Tab onto it.
  await page.evaluate(()=>{
    const s=document.querySelector('.ai-ticket-slider');
    s.scrollIntoView({block:'center'});
    const all=[...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')];
    const i=all.indexOf(s);
    if(i>0)all[i-1].focus();
  });
  await page.keyboard.press('Tab');
  const r=await page.evaluate(()=>{
    const s=document.querySelector('.ai-ticket-slider');
    const cs=getComputedStyle(s);
    const focused=document.activeElement===s;
    const matchesFV=(()=>{try{return s.matches(':focus-visible');}catch(e){return 'unsupported';}})();
    const thumbWk=getComputedStyle(s,'::-webkit-slider-thumb');
    return {
      focused, matchesFV,
      outlineColor: cs.outlineColor, outlineStyle: cs.outlineStyle,
      outlineWidth: cs.outlineWidth, outlineOffset: cs.outlineOffset,
      thumbBg: thumbWk ? thumbWk.backgroundColor : '(pseudo not readable)',
      thumbW: thumbWk ? thumbWk.width : '(n/a)',
      rect: (({x,y,width,height})=>({x,y,width,height}))(s.getBoundingClientRect())
    };
  });
  console.log(JSON.stringify(r,null,2));
  await b.close();srv.close();
})();

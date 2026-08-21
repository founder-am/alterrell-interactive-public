/* before/after line census for the footer. Uncommitted byproduct. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const LINES = () => { window.__lines=function(el){const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const g=new Map();let n;
  while((n=w.nextNode())){const t=n.textContent;const re=/\S+/g;let m;while((m=re.exec(t))){const r=document.createRange();
  r.setStart(n,m.index);r.setEnd(n,m.index+m[0].length);const q=r.getBoundingClientRect();if(!q.width&&!q.height)continue;
  const k=Math.round(q.top);if(!g.has(k))g.set(k,{top:k,words:[],left:q.left,right:q.right});const o=g.get(k);
  o.words.push(m[0]);o.left=Math.min(o.left,q.left);o.right=Math.max(o.right,q.right);}}
  return [...g.values()].sort((a,b)=>a.top-b.top).map(o=>({text:o.words.join(' '),width:+(o.right-o.left).toFixed(1)}));};};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  for (const mode of ['BEFORE (R5 reverted in-browser)','AFTER (R5 applied)']) {
    const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:2});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    if (mode.startsWith('BEFORE')) await page.addStyleTag({content:'@media (max-width:640px){.ai-share-card-footer{flex-direction:row!important;align-items:normal!important;gap:normal!important}}'});
    await page.click('[data-target="tab-share"]'); await page.waitForTimeout(120);
    await page.evaluate(LINES);
    const r = await page.evaluate(()=>{
      const card=document.querySelector('.ai-share-card');const ccs=getComputedStyle(card);
      const cw=+(card.clientWidth-parseFloat(ccs.paddingLeft)-parseFloat(ccs.paddingRight)).toFixed(2);
      const sp=document.querySelector('.ai-share-card-footer span:first-child');
      const L=window.__lines(sp);const last=L[L.length-1];
      return {cw,fd:getComputedStyle(document.querySelector('.ai-share-card-footer')).flexDirection,
        rects:sp.getClientRects().length, lines:L.length,
        lastText:last.text, lastW:last.width, pct:+((last.width/cw)*100).toFixed(1),
        all:L};
    });
    console.log(`--- ${mode} ---`);
    console.log(`  flex-direction: ${r.fd}   card content width: ${r.cw}px`);
    console.log(`  span:first-child  rects=${r.rects}  LINES=${r.lines}`);
    r.all.forEach((l,i)=>console.log(`     line ${i+1}: ${JSON.stringify(l.text)}  ${l.width}px`));
    console.log(`  LAST LINE: ${JSON.stringify(r.lastText)}  ${r.lastW}px  = ${r.pct}% of card content width\n`);
    await ctx.close();
  }
  await b.close(); s.close();
})();

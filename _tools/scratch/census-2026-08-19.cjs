/* full .ai-share-card line census at a given width. Uncommitted byproduct. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const LINES = () => { window.__lines=function(el){const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const g=new Map();let n;
  while((n=w.nextNode())){const t=n.textContent;const re=/\S+/g;let m;while((m=re.exec(t))){const r=document.createRange();
  r.setStart(n,m.index);r.setEnd(n,m.index+m[0].length);const q=r.getBoundingClientRect();if(!q.width&&!q.height)continue;
  const k=Math.round(q.top);if(!g.has(k))g.set(k,{top:k,words:[],left:q.left,right:q.right});const o=g.get(k);
  o.words.push(m[0]);o.left=Math.min(o.left,q.left);o.right=Math.max(o.right,q.right);}}
  return [...g.values()].sort((a,b)=>a.top-b.top).map(o=>({text:o.words.join(' '),width:+(o.right-o.left).toFixed(1)}));};
  window.__p=function(el){const a=[];while(el&&el.nodeType===1&&a.length<4){let s=el.tagName.toLowerCase();
  const c=(el.getAttribute('class')||'').trim().split(/\s+/).filter(Boolean);if(c.length)s+='.'+c.join('.');a.unshift(s);el=el.parentElement;}return a.join(' > ');};};
(async()=>{
  const W=+process.argv[2];
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
  await page.click('[data-target="tab-share"]'); await page.waitForTimeout(150);
  await page.evaluate(LINES);
  const out = await page.evaluate(()=>{
    const card=document.querySelector('.ai-share-card');const ccs=getComputedStyle(card);
    const cw=+(card.clientWidth-parseFloat(ccs.paddingLeft)-parseFloat(ccs.paddingRight)).toFixed(2);
    const fd=getComputedStyle(document.querySelector('.ai-share-card-footer')).flexDirection;
    return {cw, fd, items:[...card.querySelectorAll('*')].map(el=>{
      const L=window.__lines(el);const last=L[L.length-1];
      return {sel:window.__p(el), rects:el.getClientRects().length, lines:L.length,
        lastText:last?last.text:null, lastW:last?last.width:0,
        pct:last?+((last.width/cw)*100).toFixed(1):0,
        lastWords:last?last.text.trim().split(/\s+/).length:0,
        leaf: el.children.length===0};})};
  });
  console.log(`\n########## .ai-share-card CENSUS @ ${W}px ##########`);
  console.log(`card content width ${out.cw}px   |   footer flex-direction: ${out.fd}\n`);
  console.log('element'.padEnd(50)+'rects lines lastLine%  words  verdict');
  console.log('-'.repeat(104));
  for(const i of out.items){
    let v;
    if(i.lines<=1) v='ONE LINE';
    else if(i.lastWords>1) v='ACCEPTABLE (multi-word last line, not an orphan)';
    else if(!i.leaf) v='ACCEPTABLE (container; each child is one line)';
    else v='*** ORPHAN ***';
    console.log(i.sel.slice(-48).padEnd(50)+String(i.rects).padEnd(6)+String(i.lines).padEnd(6)+(i.pct+'%').padEnd(11)+String(i.lastWords).padEnd(7)+v);
  }
  await ctx.close(); await b.close(); s.close();
})();

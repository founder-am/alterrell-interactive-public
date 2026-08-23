/* Phase 2 probe, 2026-08-22. Prints computed text-align for the <th> AND every
   <td> of the six named columns on pieces/fast-food-sodium, at 360/768/1280.

   Every .ai-section is force-activated before reading, because four of the six
   columns sit on tabs that are display:none at rest and a reading taken on a
   display:none subtree is a computed value, not a used one.

   CAN detect: a header whose computed text-align differs from its column's, at
   any of the three widths, and the exact value each one computes.
   CANNOT detect: whether right-alignment is the right editorial choice, whether
   the columns LOOK aligned, or anything about a width not in the list. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2','.json':'application/json'};
const WANT=['Protein','Sodium','Fiber','US Sodium','International','Gap'];
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  for(const W of [360,768,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:1});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/fast-food-sodium/`,{waitUntil:'load'});
    await page.evaluate(()=>document.querySelectorAll('.ai-section').forEach(s=>s.classList.add('active')));
    await page.evaluate(()=>document.fonts.ready);
    const rows=await page.evaluate((WANT)=>{
      const out=[];
      document.querySelectorAll('table.ai-table').forEach((t,ti)=>{
        const ths=[...t.querySelectorAll('thead th')];
        ths.forEach((th,ci)=>{
          const label=th.textContent.trim();
          if(!WANT.includes(label))return;
          const thAlign=getComputedStyle(th).textAlign;
          const tds=[...t.querySelectorAll('tbody tr')].map(tr=>{
            const td=tr.children[ci];
            return td?{txt:td.textContent.trim(),align:getComputedStyle(td).textAlign}:null;
          }).filter(Boolean);
          out.push({table:ti,col:ci,label,thClass:th.className||'(none)',thAlign,tds});
        });
      });
      return out;
    },WANT);
    console.log(`\n================ ${W}px ================`);
    for(const r of rows){
      const cellAligns=[...new Set(r.tds.map(t=>t.align))];
      const agree=cellAligns.length===1&&cellAligns[0]===r.thAlign;
      console.log(`table ${r.table} col ${r.col}  "${r.label}"  th.class="${r.thClass}"`);
      console.log(`   TH   text-align: ${r.thAlign}`);
      r.tds.forEach((t,i)=>console.log(`   td${i}  text-align: ${t.align.padEnd(6)}  "${t.txt}"`));
      console.log(`   >> column values: {${cellAligns.join(', ')}}   header/column ${agree?'AGREE':'DISAGREE'}`);
    }
    await ctx.close();
  }
  await b.close();srv.close();
})();

/* BW PHASE 4 — computed text-align of the numeric column, at 360/768/1280.
 * Table under test: "High-protein fast food items: sodium vs. fiber" (the first
 * .ai-table on the tab-the-system panel). Column reported: Sodium, index 2.
 * CAN DETECT: the computed text-align of each cell in that column, and of the
 * column's <th>, at each width.
 * CANNOT DETECT: whether the column LOOKS aligned; alignment of any other
 * table, column or piece. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
const LABEL=process.argv[2]||'';
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  console.log(`\n########## ${LABEL} ##########`);
  for(const W of [360,768,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:2});
    const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/fast-food-sodium/`,{waitUntil:'load'});
    await page.click('[data-target="tab-the-system"]');
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(350);
    const r=await page.evaluate(()=>{
      const panel=document.getElementById('tab-the-system');
      const t=panel.querySelector('.ai-table');
      const COL=2; // Sodium
      const head=t.querySelectorAll('thead th')[COL];
      const rows=[...t.querySelectorAll('tbody tr')].map(tr=>{
        const c=tr.children[COL]; const cs=getComputedStyle(c);
        return{text:c.textContent.trim(),cls:c.className,
               textAlign:cs.textAlign,fontVariantNumeric:cs.fontVariantNumeric};});
      const hcs=getComputedStyle(head);
      return{header:{text:head.textContent.trim(),cls:head.className,
                     textAlign:hcs.textAlign,fontVariantNumeric:hcs.fontVariantNumeric},rows};
    });
    console.log(`\n--- viewport ${W} · table "High-protein fast food items" · column 2 (Sodium) ---`);
    console.log(`  TH  ${r.header.text.padEnd(12)} class="${r.header.cls}"`);
    console.log(`      text-align: ${r.header.textAlign}   font-variant-numeric: ${r.header.fontVariantNumeric}`);
    r.rows.forEach((c,i)=>{
      console.log(`  TD${i+1} ${c.text.padEnd(12)} text-align: ${c.textAlign.padEnd(8)} fvn: ${c.fontVariantNumeric.padEnd(14)} class="${c.cls}"`);
    });
    await ctx.close();
  }
  await b.close();srv.close();
})();

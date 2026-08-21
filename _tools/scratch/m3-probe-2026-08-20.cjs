/* M3 probe: line-box census for the ticket-split row label at a given width.
   Uses Range.getClientRects() over the td's TEXT NODE, which returns one rect
   per line box. This works here and did NOT work on the footer because the
   footer's children are flex items and therefore blockified — each got exactly
   one rect regardless of wrapping. A bare text node inside a td is not
   blockified, so its rects are its line boxes. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const W = +(process.argv[2]||360);
const LABEL = 'Promoter and venue share, 15% of the remainder';
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:W,height:900},deviceScaleFactor:2});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  // Both labels live in tab-the-data (concert-tax.mdx 80-283). Without this
  // click the panel is display:none, clientWidth is 0 and getClientRects()
  // returns nothing -- a probe that would report "clear" on a hidden element.
  await page.click('[data-target="tab-the-data"]');
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(250);
  const out = await page.evaluate((LABEL) => {
    // every td whose trimmed text is the label, in document order
    const tds = [...document.querySelectorAll('td')].filter(td => td.textContent.trim() === LABEL);
    return tds.map(td => {
      const table = td.closest('table');
      const cs = getComputedStyle(td);
      const padL = parseFloat(cs.paddingLeft), padR = parseFloat(cs.paddingRight);
      const contentW = td.clientWidth - padL - padR;
      // one rect per line box, over the text node itself
      const tn = [...td.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      const rng = document.createRange();
      const lines = [];
      if (tn) {
        // walk character offsets, grouping by rect top -> gives per-line text
        rng.selectNodeContents(tn);
        const rects = [...rng.getClientRects()];
        // recover text per line by bisecting on rect index
        const txt = tn.textContent;
        const tops = rects.map(r => +r.top.toFixed(1));
        const perLine = tops.map(()=>'');
        for (let i=0;i<txt.length;i++){
          const r2=document.createRange(); r2.setStart(tn,i); r2.setEnd(tn,i+1);
          const cr=r2.getClientRects()[0]; if(!cr) continue;
          const k=tops.indexOf(+cr.top.toFixed(1));
          if(k>=0) perLine[k]+=txt[i];
        }
        rects.forEach((r,i)=>lines.push({
          line:i+1,
          widthPx:+r.width.toFixed(2),
          pctOfContent:+((r.width/contentW)*100).toFixed(1),
          text: perLine[i],
          words: perLine[i].trim().split(/\s+/).filter(Boolean).length
        }));
      }
      const last = lines[lines.length-1];
      return {
        tableClass: table ? table.className : '(none)',
        tdClientWidth: +td.clientWidth.toFixed(2),
        paddingLeft: padL, paddingRight: padR,
        contentBoxWidth: +contentW.toFixed(2),
        fontSize: cs.fontSize, textWrap: cs.textWrap || cs.textWrapStyle || '(n/a)',
        rectCount: lines.length,
        lines,
        lastLinePct: last ? last.pctOfContent : null,
        lastLineWords: last ? last.words : null,
        DEFECT: !!(last && (last.words === 1 || last.pctOfContent < 30))
      };
    });
  }, LABEL);
  console.log(`\n=== M3 probe @ ${W}px ===`);
  out.forEach((o,i)=>{
    console.log(`\n--- instance ${i+1}: table.${o.tableClass} ---`);
    console.log(`  td clientWidth ${o.tdClientWidth}  padding ${o.paddingLeft}/${o.paddingRight}  contentBox ${o.contentBoxWidth}  font ${o.fontSize}  text-wrap ${o.textWrap}`);
    console.log(`  rectCount (line boxes): ${o.rectCount}`);
    o.lines.forEach(l=>console.log(`    line ${l.line}: ${String(l.widthPx).padStart(7)}px  ${String(l.pctOfContent).padStart(5)}%  ${l.words}w  "${l.text}"`));
    console.log(`  last line: ${o.lastLinePct}% of content, ${o.lastLineWords} word(s)  ->  ${o.DEFECT?'DEFECT':'clear'}`);
  });
  // GUARD: a zero rect count or zero-width td means the element was not laid
  // out (hidden tab, missing node). That is an inconclusive probe, never a pass.
  const bad = out.filter(o => o.rectCount === 0 || o.contentBoxWidth <= 0);
  if (out.length !== 2 || bad.length) {
    console.log(`\nPROBE INVALID: expected 2 laid-out instances, got ${out.length} with ${bad.length} not laid out.`);
    process.exitCode = 2;
  }
  console.log('\nJSON:'+JSON.stringify(out));
  await ctx.close(); await b.close(); s.close();
})();

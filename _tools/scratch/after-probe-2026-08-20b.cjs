/* BEFORE probe, correction pass 2026-08-20. Read-only, writes no file.
   Measures, on the built dist:
     - .ai-concert computed max-width / width / left at 360, 768, 1280
     - the three role="group" accessible names as they stand now
     - at 360: focus-visible outline vs selected fill on two options in one step
     - headline computed type: empty-state line 1 vs occupied headline
   CAN detect: the computed values named above, as Chromium resolves them.
   CANNOT detect: whether those values are the right ones. It is a baseline. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const ROOT=process.cwd()+'/dist';
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
const pick=async(p,d,c,s)=>{for(const[k,v]of[['dancers',d],['costumes',c],['staging',s]])
  await p.click(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);};
const typeOf=(sel)=>{const e=document.querySelector(sel);if(!e)return null;const c=getComputedStyle(e);
  return{cls:e.className,text:e.textContent.slice(0,40),family:c.fontFamily,size:c.fontSize,
    weight:c.fontWeight,margin:[c.marginTop,c.marginRight,c.marginBottom,c.marginLeft].join(' ')};};
(async()=>{
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  for(const W of [360,768,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:900}});const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    await page.click('[data-target="tab-the-data"]');await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(200);
    const geo=await page.evaluate(()=>{const r=document.querySelector('.ai-concert');const c=getComputedStyle(r);
      const bb=r.getBoundingClientRect();
      return{maxWidth:c.maxWidth,width:bb.width.toFixed(2),left:bb.left.toFixed(2)};});
    console.log(`@${W}  .ai-concert  max-width ${geo.maxWidth}  width ${geo.width}px  left ${geo.left}px`);
    /* Accessible name straight out of Chromium's AX engine over CDP, not
       inferred from attributes. This is what a screen reader would announce. */
    const cdp=await ctx.newCDPSession(page);
    await cdp.send('DOM.enable');await cdp.send('Accessibility.enable');
    const doc=await cdp.send('DOM.getDocument',{depth:-1,pierce:true});
    const q=await cdp.send('DOM.querySelectorAll',{nodeId:doc.root.nodeId,selector:'.ai-concert-options[role="group"]'});
    for(let i=0;i<q.nodeIds.length;i++){
      const ax=await cdp.send('Accessibility.getPartialAXTree',{nodeId:q.nodeIds[i],fetchRelatives:false});
      const node=ax.nodes.find(n=>n.role&&n.role.value==='group')||ax.nodes[0];
      const name=node&&node.name?node.name.value:'';
      const attrs=await page.evaluate(i=>{const el=document.querySelectorAll('.ai-concert-options[role="group"]')[i];
        return{label:el.getAttribute('aria-label'),labelledby:el.getAttribute('aria-labelledby')};},i);
      console.log(`@${W}  group ${i+1}  AXname=${JSON.stringify(name)}  empty=${name.length===0}  aria-label=${JSON.stringify(attrs.label)}  aria-labelledby=${JSON.stringify(attrs.labelledby)}`);
    }
    await pick(page,'full','none','minimal');await page.waitForTimeout(150);
    const e1=await page.evaluate(typeOf,'.ai-concert-empty p');
    console.log(`@${W}  EMPTY line1     ${JSON.stringify(e1)}`);
    await pick(page,'full','many','max');await page.waitForTimeout(150);
    const o1=await page.evaluate(typeOf,'.ai-concert-results-hed');
    console.log(`@${W}  OCCUPIED hed    ${JSON.stringify(o1)}`);
    if(W===360){
      await page.click('.ai-concert-reset');await page.waitForTimeout(100);
      await page.click('.ai-concert-option[data-step="dancers"][data-value="full"]');
      // real keyboard focus so :focus-visible actually matches
      await page.keyboard.press('Shift+Tab');
      await page.keyboard.press('Shift+Tab');
      const r5=await page.evaluate(()=>['full','none','few'].map(v=>{
        const el=document.querySelector(`.ai-concert-option[data-step="dancers"][data-value="${v}"]`);
        const c=getComputedStyle(el);
        return{value:v,pressed:el.getAttribute('aria-pressed'),focused:document.activeElement===el,
          matchesFocusVisible:el.matches(':focus-visible'),
          outline:`${c.outlineStyle} ${c.outlineWidth} ${c.outlineColor} offset ${c.outlineOffset}`,
          background:c.backgroundColor};}));
      r5.forEach(o=>console.log(`@360 R5  "${o.value}"  pressed=${o.pressed}  focused=${o.focused}  :focus-visible=${o.matchesFocusVisible}  outline ${o.outline}  bg ${o.background}`));
    }
    await ctx.close();
  }
  await b.close();srv.close();
})();

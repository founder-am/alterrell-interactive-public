/* BW PHASE 2 — locate which device rows differ between two same-size PNGs.
 * CAN DETECT: the row ranges whose pixels changed, and whether any changed row
 * is a full-width #111 band (the nav ink).
 * CANNOT DETECT: why they changed. Row indices are evidence, not a cause. */
const { chromium } = require('playwright');
const fs=require('node:fs');
(async()=>{
  const b=await chromium.launch(); const page=await (await b.newContext()).newPage();
  const [A,B]=process.argv.slice(2);
  const toSrc=f=>'data:image/png;base64,'+fs.readFileSync(f).toString('base64');
  const r=await page.evaluate(async([sa,sb])=>{
    const load=async s=>{const i=new Image();i.src=s;await i.decode();
      const c=document.createElement('canvas');c.width=i.width;c.height=i.height;
      c.getContext('2d').drawImage(i,0,0);
      return{w:i.width,h:i.height,d:c.getContext('2d').getImageData(0,0,i.width,i.height).data};};
    const a=await load(sa), bb=await load(sb);
    if(a.w!==bb.w||a.h!==bb.h) return {mismatch:true,a:[a.w,a.h],b:[bb.w,bb.h]};
    const rows=[]; let navRows=0;
    for(let y=0;y<a.h;y++){
      let diff=0, dark=0;
      for(let x=0;x<a.w;x++){
        const i=(y*a.w+x)*4;
        if(a.d[i]!==bb.d[i]||a.d[i+1]!==bb.d[i+1]||a.d[i+2]!==bb.d[i+2]) diff++;
        if(Math.abs(a.d[i]-17)<14&&Math.abs(a.d[i+1]-17)<14&&Math.abs(a.d[i+2]-17)<14) dark++;
      }
      if(diff>0){rows.push({y,diffPx:diff,pctRow:+(100*diff/a.w).toFixed(1),wasFullWidthNavInk:dark/a.w>=0.95});
        if(dark/a.w>=0.95) navRows++;}
    }
    // compress to ranges
    const ranges=[];let st=null,prev=null,mx=0;
    for(const rr of rows){ if(st===null){st=rr.y;mx=rr.pctRow;} else if(rr.y!==prev+1){ranges.push([st,prev,mx]);st=rr.y;mx=rr.pctRow;} else mx=Math.max(mx,rr.pctRow); prev=rr.y;}
    if(st!==null)ranges.push([st,prev,mx]);
    return{h:a.h,changedRows:rows.length,changedRangeCount:ranges.length,
      ranges:ranges.slice(0,25),navInkRowsAmongChanged:navRows};
  },[toSrc(A),toSrc(B)]);
  console.log(JSON.stringify(r,null,2));
  await b.close();
})();

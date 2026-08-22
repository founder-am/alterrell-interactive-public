/* BW PHASE 2 — scan a PNG for a full-width near-black band (the nav ink #111111).
 * CAN DETECT: rows where >=95% of pixels are within tolerance of #111111.
 * CANNOT DETECT: which element painted such a row. A dark full-width row could
 * be a hero, a footer, or a dark section — the row index is what disambiguates. */
const { chromium } = require('playwright');
const fs=require('node:fs');
(async()=>{
  const b=await chromium.launch(); const page=await (await b.newContext()).newPage();
  for(const f of process.argv.slice(2)){
    const data='data:image/png;base64,'+fs.readFileSync(f).toString('base64');
    const rows=await page.evaluate(async(src)=>{
      const img=new Image(); img.src=src; await img.decode();
      const c=document.createElement('canvas'); c.width=img.width; c.height=img.height;
      c.getContext('2d').drawImage(img,0,0);
      const H=Math.min(img.height,400); // top 400 device rows only
      const d=c.getContext('2d').getImageData(0,0,img.width,H).data;
      const hits=[];
      for(let y=0;y<H;y++){
        let dark=0;
        for(let x=0;x<img.width;x++){
          const i=(y*img.width+x)*4;
          if(Math.abs(d[i]-17)<14&&Math.abs(d[i+1]-17)<14&&Math.abs(d[i+2]-17)<14) dark++;
        }
        if(dark/img.width>=0.95) hits.push(y);
      }
      return {w:img.width,h:img.height,darkRows:hits.length,
              first:hits[0],last:hits[hits.length-1],scanned:H};
    },data);
    console.log(`${f.split('/').pop().padEnd(36)} ${rows.w}x${rows.h}  full-width #111 rows in top ${rows.scanned}: ${rows.darkRows}` +
      (rows.darkRows?`  (device rows ${rows.first}..${rows.last})`:''));
  }
  await b.close();
})();

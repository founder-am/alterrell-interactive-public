/* BW PHASE 5 VERIFY — does the built page's og:image path resolve on a local
 * preview server serving dist/?
 * CAN DETECT: the meta tag's URL, the path it maps to, the HTTP status, the
 * content-type and the byte length actually served, and the served PNG's
 * dimensions. CANNOT DETECT: anything about the production host. */
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;

  const html=fs.readFileSync(ROOT+'/pieces/concert-tax/index.html','utf8');
  const og=html.match(/<meta property="og:image"\s+content="([^"]+)">/)[1];
  const p=new URL(og).pathname;
  console.log(`og:image meta      ${og}`);
  console.log(`path requested     ${p}`);

  const res=await new Promise(rs=>http.get({host:'127.0.0.1',port,path:p},x=>{
    const c=[];x.on('data',d=>c.push(d));x.on('end',()=>rs({status:x.statusCode,type:x.headers['content-type'],buf:Buffer.concat(c)}));}));
  console.log(`HTTP status        ${res.status}`);
  console.log(`content-type       ${res.type}`);
  console.log(`bytes served       ${res.buf.length}`);
  if(res.status===200&&res.buf.length>24){
    const b=res.buf.subarray(16,24);
    console.log(`served PNG size    ${b.readUInt32BE(0)} x ${b.readUInt32BE(4)}`);
    const disk=fs.readFileSync(process.cwd()+'/public/og/concert-tax.png');
    console.log(`identical to public/og/concert-tax.png on disk: ${disk.equals(res.buf)}`);
  }
  console.log(res.status===200?'\nRESOLVES: yes':'\nRESOLVES: NO');
  srv.close();
  process.exitCode=res.status===200?0:1;
})();

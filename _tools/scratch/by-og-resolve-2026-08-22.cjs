/* Phase 7 verify, 2026-08-22. Serves dist/ and requests the exact path the
   built page's og:image emits, then compares the served bytes against the file
   on disk.
   CAN detect: a 404, a wrong content-type, and a served body that differs from
   public/og/concert-tax.png.
   CANNOT detect: whether the real host at interactive.alterrell.com serves it —
   this is a local preview over dist/, not production. */
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2','.json':'application/json'};
const ROOT=process.cwd()+'/dist';
const html=fs.readFileSync(path.join(ROOT,'pieces/concert-tax/index.html'),'utf8');
const og=(html.match(/<meta property="og:image"\s+content="([^"]+)">/)||[])[1];
const url=new URL(og);
const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
  const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
  r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
srv.listen(0,'127.0.0.1',()=>{
  const port=srv.address().port;
  console.log('og:image emitted by the built page : '+og);
  console.log('path requested on the local server : '+url.pathname);
  http.get({host:'127.0.0.1',port,path:url.pathname},res=>{
    const chunks=[];res.on('data',c=>chunks.push(c));
    res.on('end',()=>{
      const body=Buffer.concat(chunks);
      const disk=fs.readFileSync('public/og/concert-tax.png');
      const h=b=>crypto.createHash('sha256').update(b).digest('hex');
      console.log(`status                             : ${res.statusCode} ${res.headers['content-type']}`);
      console.log(`bytes served                       : ${body.length}`);
      console.log(`bytes on disk (public/og)          : ${disk.length}`);
      console.log(`sha256 served                      : ${h(body)}`);
      console.log(`sha256 on disk                     : ${h(disk)}`);
      console.log(`served == disk                     : ${h(body)===h(disk)}`);
      console.log(`dimensions from served PNG header  : ${body.readUInt32BE(16)} x ${body.readUInt32BE(20)}`);
      srv.close();
      process.exitCode=(res.statusCode===200&&h(body)===h(disk)&&body.readUInt32BE(16)===1200&&body.readUInt32BE(20)===630)?0:1;
    });
  });
});

const http =  require('http');

const server = http.createServer((req,res)=>{
   res.end('whazza!');
})

server.listen(3000);
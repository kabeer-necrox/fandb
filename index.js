const http = require("http")

const port = 4000;
http.createServer((req,resp)=>{
resp.write(`welcome to local host:${port}`);
resp.end()
}).listen(port)
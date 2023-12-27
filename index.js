const http = require("http");
const data = require("./data");
const { log } = require("console");

const port = 4000;

http.createServer((req, resp) => {
  resp.writeHead(200, { "content-type": "application/json" });

  resp.write(JSON.stringify(data));
  resp.end();
}).listen(port);
console.log(data)


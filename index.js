// const http = require("http");
// const data = require("./data");
// const { log } = require("console");

// const port = 4000;

// http.createServer((req, resp) => {
//   resp.writeHead(200, { "content-type": "application/json" });

//   resp.write(JSON.stringify(data));
//   resp.end();
// }).listen(port);
// console.log(data)


const express = require('express');
const app = express()

app.get("/about",(req,resp)=>{
  resp.send("local server is running about")
})

app.get("/",(req,resp)=>{
  resp.send("local server is running")
})
app.listen(8000,()=>{
  console.log("local host is running");
})


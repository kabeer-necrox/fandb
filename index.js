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

const Color = require('color');
const express = require('express');
const app = express()

app.use(express.json())

app.get("/about",(req,resp)=>{
  resp.send("local server is running about")
})

app.get("/",(req,resp)=>{
  resp.send("local server is running")
})

app.post("/user",(req,resp)=>{
  console.log(req.body);
  resp.send("this is user data....")
})

app.post("/user2",(req,resp)=>{
  console.log(req.body);
  resp.send("this is user2 data....")
})
app.listen(8000,()=>{
  console.log("local host is running");
})


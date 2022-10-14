// const http = require("http");
// const server = http.createServer((req, res) => {
//   const url = new URL(req.url, "http://localhost:3000");
//   console.log(url);
//   res.end(url.search);
// });
// server.listen(3000);

const { json } = require("express");
const express = require("express");
const server = express();

server.use(json());

let users = [];

server.post("/users", (req, res) => {
  users.push(req.body);
  res.send("okey");
});

server.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});
server.listen(3000);

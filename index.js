const http = require("http");
const fs = require("fs");
const os = require("os");

http.createServer();

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  })
  .listen(8000); //port 3000-9999
console.log("Application is Running");

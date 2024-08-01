const properCase = require("proper-upper-case");
const http = require("http");
const fs = require("fs");

const proper = () => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          data: `${properCase("HELLo WorlD")}`,
        })
      );
    })
    .listen(6999);
  console.log("app is runnning");
};
proper();

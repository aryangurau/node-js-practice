const http = require("http");
const fs = require("fs");
const os = require("os");

http.createServer();

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //logic to check RAM in GB?
    const byteToGb = 1073741824;
    const myRam = os.totalmem() / byteToGb;
    const availableRam = os.freemem() / byteToGb;

    res.end(
      JSON.stringify({
        data: {
          myRam: `you have ${myRam} Gb RAM`,
          availableRam: `you have ${availableRam}GB free out of ${myRam} Gb RAM `,
        },
      })
    );
  })
  .listen(8000); //port 3000-9999
console.log("Application is Running");

//importing own modules from text.js

const text = require("./text");
console.log(text.lowerCase("aryAn GuRau"));

const Num = require("./Number");
console.log(Num.properNumber(32323343));

const sum = require("./Number");
console.log(sum.sumNum(3, 3));

// creation of the module and started to learn about NPM

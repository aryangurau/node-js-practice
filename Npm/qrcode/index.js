const http = require("http");
const qrcode = require("qrcode");

const wrapedQr = (url) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });

      qrcode.toDataURL(url, (err, url) => {
        if (err) console.log(err);
        res.end(`<img
        src="  ${url}"/>`);
      });
    })
    .listen(3999);
  console.log("App is running");
};
console.log(wrapedQr("https://www.npmjs.com/package/proper-upper-case"));

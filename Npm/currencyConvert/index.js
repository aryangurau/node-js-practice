const http = require("http");
const CC = require("currency-converter-lt");
let currencyConverter = new CC();

const converter = (amountToconvert, from, to) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      currencyConverter
        .from(from)
        .to(to)
        .amount(Number(amountToconvert))
        .convert()
        .then((response) => {
          res.end(`${amountToconvert} ${from} is equal to ${response} ${to}`);
        });
    })
    .listen(3999);
  console.log("app is running");
};
converter(1, "USD", "EUR");

//write a currency conversion code in js using npm package and npm modules
// const converter = (amountToconvert, from, to) => {
//   currencyConverter
//     .from(from)
//     .to(to)
//     .amount(Number(amountToconvert))
//     .convert()
//     .then((response) => {
//       console.log(`${amountToconvert} ${from} is equal to ${response} ${to}`);
//     });
// };
// converter(2, "USD", "NPR");

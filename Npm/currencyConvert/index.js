const CC = require("currency-converter-lt");

const fromCurrency = "USD";
const toCurrency = "NPR";
const amountToconvert = 1;
const currencyConverter = new CC({
  from: fromCurrency,
  to: toCurrency,
  amount: amountToconvert,
});
const currency = (amountToconvert) => {
  return currencyConverter.convert(Number(amountToconvert)).then((response) => {
    console.log(
      `${amountToconvert} ${fromCurrency}  is equal to ${response} ${toCurrency}`
    );
  });
};
console.log(currency(10));
// currencyConverter .from("USD").to("NPR").amount() .convert() .then((response) => {console.log(response);});

const crypto = require("crypto");

//write a function that creates a random number using crypto module

const genRandom = (digit) => {
  const start = digit === 6 ? 100000 : 10000;
  const end = digit === 6 ? 999999 : 99999;

  return crypto.randomInt(start, end);
};
console.log(genRandom(6));

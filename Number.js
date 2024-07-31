// Number Modules

const properNumber = (num) => num.toLocaleString(); //this module is used to  separate the numbers with commas
// console.log(properNumber(12834232));

const sumNum = (a, b) => a + b;
// console.log(sumNum(5, 4));
module.exports = { properNumber, sumNum };

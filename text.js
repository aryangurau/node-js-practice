//creating own modules and exporting to index.jsS
const lowerCase = (text) => text.toLowerCase();
const upperCase = (text) => text.toUpperCase();
const properCase = (text) =>
  text
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length - 1).toLowerCase()
    )
    .join(" ");

module.exports = { lowerCase, upperCase, properCase };

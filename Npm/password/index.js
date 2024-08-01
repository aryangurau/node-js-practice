const bcrypt = require("bcryptjs");

const genHash = (string) => bcrypt.hashSync(String(string), 10);
const compareHash = (string, hashedString) =>
  bcrypt.compareSync(String(string), hashedString);

const hash = genHash("Aryangurau123");
console.log({ hash });
const checkPw = compareHash("Aryangurau123", hash);
console.log({ checkPw });

//practiced password hashing
/*
const bcrypt = require("bcryptjs");

const hashGen = (string) => bcrypt.hashSync(String(string), 10);
const compare = (string, hashedPw) =>
  bcrypt.compareSync(String(string), hashedPw);

const hash = hashGen("aryangurau122");
console.log({ hash });
const checkPw = compare("aryangurau122", hash);
console.log({ checkPw });
*/

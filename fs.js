//write a js function to read the content of the file using fs module
// result: hello this is file from hello.txt

const fs = require("fs");

const readfile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};
console.log(readfile("hello.txt"));
console.log(readfile("file1.txt"));

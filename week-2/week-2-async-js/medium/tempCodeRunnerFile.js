//read file

var fs = require("fs");

fs.readFile(
  "week-2/week-2-async-js/medium/cleaner.txt",
  "utf8",
  function (err, data) {
    if (data) {
      console.log(data.toString());
    } else {
      console.error("Error reading file:", err);
    }
  }
);

//write file
const content = "hello world my name is xievy!";

fs.writeFile(
  "week-2/week-2-async-js/medium/cleaner.txt",
  content,
  function (err) {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File has been written successfully!");
    }
  }
);

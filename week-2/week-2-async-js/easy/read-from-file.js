var fs = require("fs");

var count = 0;
var maxCount = 10;

fs.readFile(
  "week-2/week-2-async-js/easy/reader.txt",
  "utf8",
  function (err, data) {
    if (data) {
      console.log(data.toString());
    } else {
      console.error("Error reading file:", err);
    }
  }
);

for (let i = 0; i < maxCount; i++) {
  count++;
  console.log(count);
}

var fs = require("fs");
const content =
  "Hey this is wrriter file for the week-2-async-js project by https://github.com/evyxiowo ";

fs.writeFile("week-2/week-2-async-js/easy/writer.txt", content, function (err) {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log(
      "File has been written successfully! Go check b.txt for updated information."
    );
  }
});

var count = 0;
var maxCount = 10;

for (let i = 0; i < maxCount; i++) {
  count++;
  console.log(count);
}

const fs = require("fs");

// Read the file
fs.readFile(
  "week-2/week-2-async-js/medium/cleaner.txt",
  "utf8",
  (err, data) => {
    if (err) {
      return console.error("Error reading file:", err);
    }
    console.log("File read successfully =!");

    const cleanedContent = data.split(/\s+/).join(" ").trim();

    // Write file
    fs.writeFile(
      "week-2/week-2-async-js/medium/cleaner.txt",
      cleanedContent,
      (err) => {
        if (err) {
          return console.error("Error writing file:", err);
        }
        console.log("Fil cleaned and written =!");
      }
    );
  }
);

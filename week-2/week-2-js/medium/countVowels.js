/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  var amtVowels = 0;

  const lowerCaseStr = str.toLowerCase();

  for (let char of lowerCaseStr) {
    if (vowels.includes(char)) {
      amtVowels += 1;
    }
  }

  return amtVowels;
}

module.exports = countVowels;

// use `countVowels`

const xmpstr = "Hello, xievy!";
console.log(countVowels(xmpstr));

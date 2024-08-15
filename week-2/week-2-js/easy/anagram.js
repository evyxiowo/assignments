/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1Lower = str1.toLowerCase();
  const str2Lower = str2.toLowerCase();

  const str1Sort = str1Lower.split("").sort().join("");
  const str2Sort = str2Lower.split("").sort().join(""); // Fixed variable name

  return str1Sort === str2Sort;
}

module.exports = isAnagram;

// usage:

console.log(isAnagram("xievy", "evyxi")); // true

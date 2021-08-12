let isIsogram = function (str) {
  const upperStr = str.toUpperCase();

  const set = new Set(upperStr.split(''));
  return str.length === set.size ? true : false;
};

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('gdhnVzgv'));
/*
  문제
  Write a function

    function isIsogram(str);
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.

Assume the empty string is an isogram. Ignore letter case.

Examples:
1. "Dermatoglyphics" would return true. The string will not repeating letters.
2. "gdhnVzgv" would return false. The string will repeating letters 'g', 'v'.

Write an efficient algorithm for the following assumptions:

str.length is an integer within the range [1.. 10,000]

*/

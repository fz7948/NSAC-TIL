function findMissingNumber(str) {
  const strList = str.split(' ').sort((a, b) => a - b);

  for (let i = 0; i < str.length; i++) {
    if (+strList[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log(findMissingNumber('1 6 2 4 3')); // 5
console.log(findMissingNumber('1 2 3 4 5 6 7 9 10 11 12 13 14 15')); // 8

/*

  Write a function

    function findMissingNumber(str);
find out what that number is, assuming you write it in a random row by excluding one of the numbers from 1 to n.
Numbers are given as strings, with a space between each number. (Example: '1 6 2 4 3') There are no situations where two numbers are missing.

Examples:
1. Input: '1 6 2 4 3', Output: 5
2. Input: '1 2 3 4 5 6 7 9 10 11 12 13 14 15', Output: 8

Write an efficient algorithm for the following assumptions:
'str' is a list of numbers in the form of a string, within the range 1.. 100,000
*/

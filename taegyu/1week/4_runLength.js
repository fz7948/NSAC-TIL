function runLength(str) {
  let result = '';
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      result += cnt + str[i];
      cnt = 1;
    }
  }
  return result;
}

console.log(runLength('wwwggopp')); //  3w2g1o2p
console.log(runLength('EDNSOEQTWVOQQVDVRC')); // 1E1D1N1S1O1E1Q1T1W1V1O2Q1V1D1V1R1C.

/*\

문제

Write a function

    runLength(str)
Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm.
This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

Examples:
1. "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
2. "EDNSOEQTWVOQQVDVRC" would return 1E1D1N1S1O1E1Q1T1W1V1O2Q1V1D1V1R1C.

Write an efficient algorithm for the following assumptions:

str.length is an integer within the range 1.. 100,000

*/

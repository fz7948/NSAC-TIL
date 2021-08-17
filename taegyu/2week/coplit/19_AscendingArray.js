function ascendingArray(start, end, arr = []) {
  if (start === end) {
    arr.push(end);
    return arr;
  }
  arr.push(start);
  return ascendingArray(start + 1, end, arr);
}

let output = ascendingArray(1, 7);
console.log(output); // --> [1, 2, 3, 4, 5, 6, 7]

output = ascendingArray(6, 12);
console.log(output); // --> [6, 7, 8, 9, 10, 11, 12]

output = ascendingArray(24, 31);
console.log(output); // --> [24, 25, 26, 27, 28, 29, 30, 31]

output = ascendingArray(106, 114);
console.log(output); // --> [106, 107, 108, 109, 110, 111, 112, 113, 114]

// 아 문제에 재귀로풀래
// function ascendingArray(start, end) {
//   return Array.from(
//     Array(end - start + 1).fill(start),
//     (val, idx) => val + idx
//   );
// }
/*
문제
AscendingArray
Question
You should be return an ascending integer array that starts with indicated by the start parameter and ends with the end parameter.

Input
Parameter 1: start
number type
Parameter 2: end
number type
Output
Your function should return an array
Constraints
The function ascendingArray is written in the form of a recursive function.
The use of repeat statements (for, while) is prohibited.
The start parameter must always be less than or equal to the end parameter.
I/O Example
let output = ascendingArray(1,7);
console.log(output); // --> [1, 2, 3, 4, 5, 6, 7]

output = ascendingArray(6,12);
console.log(output); // --> [6, 7, 8, 9, 10, 11, 12]

output = ascendingArray(24,31);
console.log(output); // --> [24, 25, 26, 27, 28, 29, 30, 31]

output = ascendingArray(106,114);
console.log(output); // --> [106, 107, 108, 109, 110, 111, 112, 113, 114]
*/

function reverseArr(arr, result = []) {
  if (arr.length === 0) return result;
  const newArr = [...arr];
  result.unshift(newArr.shift());
  return reverseArr(newArr, result);
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

/*
문제
reverseArr
Question
Use the recursive function to create a function that returns a reversed array.

Input
Parameter 1: arr
Array type
Output
A reversed Array should be returned.
[arr[n-1], arr[n-2], ... , arr[0]]
arr.length is n.
Constraints
The function reverseArr should be written in the form of a recursive function.
The use of repeat statements (for, while) is prohibited.
The input array must retain its initial state after the function call (immutability).
An empty array must return as it is.
I/O Example
let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
*/

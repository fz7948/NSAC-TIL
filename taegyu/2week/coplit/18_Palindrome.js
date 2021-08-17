//
function palindrome(str) {
  return str === str.split('').reverse().join('') ? true : false;
}

/*
문제
  Palindrome
Question
When the input string is placed upside down, it should return whether it matches or not.

Input
Parameter 1: str
string type
Output
boolean type must be returned.
Constraints
The function palindrome is written in the form of a recursive function.
The use of repeat statements (for, while) is prohibited.
boolean type must be returned.
If it is an empty string, you should be return true.
Upper and lower case letters are treated as different characters.
I/O Example
let output = palindrome('apple');
console.log(output); // --> false

output = palindrome('level');
console.log(output); // --> true

output = palindrome('now i won');
console.log(output); // --> true

output = palindrome('Now i won');
console.log(output); // --> false

*/

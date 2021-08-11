function commonCharacters(string1, ...restString) {
  const set = new Set(string1.split(''));
  const newString = [...set].join('');
  let result = '';
  for (let i of newString) {
    if (
      restString.filter((str) => str.includes(i)).length === restString.length
    ) {
      result += i;
    }
  }
  return result;
}

// console.log(commonCharacters('acexivou', 'aegihobu')); // 'aeiou'
console.log(
  commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa')
); //

/* 파라미터 2개일때
function commonCharacters(string1, string2) {
  const set = new Set(string1.split(''));
  const newString = [...set].join('');
  let result = '';
  for (let i = 0; i < newString.length; i++) {
    if (string2.indexOf(newString[i]) !== -1) {
      result += newString[i];
    }
  }
  return result;
}


*/

/*
  문제

Write a function f(a, b) which takes two strings as arguments and returns a string containing the characters found in both strings (without duplication), in the order that they appeared in a.
Remember to skip spaces and characters you have already encountered!

Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'

Extra credit: Extend your function to handle more than two input strings.
*/

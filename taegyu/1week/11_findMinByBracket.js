function findMinByBracket(str) {
  const minusIdx = str.indexOf('-');
  const left = str.slice(0, minusIdx);
  const right = str.slice(minusIdx, str.length);

  const leftSum = plustStr(left)
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  const rightSum = plustStr(right)
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  return leftSum - rightSum;
}

function plustStr(str) {
  let newStr = '';
  for (let i of str) {
    if (i === '-') {
      newStr += '+';
    } else {
      newStr += i;
    }
  }
  return newStr;
}

console.log(findMinByBracket('55-50+40'));
console.log(findMinByBracket('-1-2-3-4-5'));
/*
문제
After creating an expression with a maximum length of 50 with negative and positive numbers, +, -, and (), I deleted all parentheses in the expression. Let's call this a strange formula.
Write a function that minimizes the value of strange formula using parentheses appropriately.

The number consists of up to 4 digits.

Examples:
'55-50+40' => '55-(50+40)', and the minimum number is -35.
'-1-2-3-4-5' => '-1-2-3-4-5', and the minimum number is -15.
*/

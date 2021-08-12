function ABCheck(str) {
  if (str === undefined) return false;

  const upperStr = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (upperStr[i] === 'A') {
      if (upperStr[i + 4] === 'B') {
        return true;
      }
    } else if (upperStr[i] === 'B') {
      if (upperStr[i + 4] === 'A') {
        return true;
      }
    }
  }
  return false;
}

const input1 = 'aMAJ7sBrO4CyysuomxHHFrgGTXXP 5DT8Jr';
console.log(ABCheck(input1)); // true

const input2 = 'lane borrowed';
console.log(ABCheck(input2)); // true

const input3 = 'c';
console.log(ABCheck(input3)); // false

/*
ㅁㅜㄴ제
Write a function

  function ABCheck(str);
Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the true if the characters a and b are separated by exactly 3 places anywhere in the string at least once Otherwise return the false.
For example, lane Borrowed would result in true because there is exactly three characters between a and B
You should consider about space and capital character.

Please Note: you have to take care of undefined input case

It is not case sensitive.
'a' and 'b' may appear repeatedly.

*/

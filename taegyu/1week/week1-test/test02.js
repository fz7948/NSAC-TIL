function test2(string) {
  if (string === '') {
    return null;
  }

  for (let char of string) {
    if (char.charCodeAt() < 65 || char.charCodeAt() > 90) {
      return null;
    }
  }

  const map1 = new Map();

  for (let char of string) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }

  for (let [key, value] of map1) {
    if (value === 1) {
      return key;
    }
  }
}
console.log(test2(''));
console.log(test2('ABA')); // B
console.log(test2('AACBDB')); // C

/*
문제
  Given a string Str of only uppercase letters, return the first non-repeating character.

Constraints:
No spaces are given.
There may be only repetitive strings.
It does not include anything other than strings, such as numbers or symbols.
Returns null when an empty string comes in.
Returns null when an only repetitive strings comes in.

Example:

firstNonRepeatedCharacter('ABA'); // => 'B'
firstNonRepeatedCharacter('AACBDB'); // => 'C'
*/

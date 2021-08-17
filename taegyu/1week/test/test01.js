function test1(string) {
  function expand(left, right) {
    //right==s.length까지 검사하는 이유는 slice에서 맨 끝 인덱스가 짤리기 때문이다
    while (
      left >= 0 &&
      right <= string.length &&
      string[left] == string[right - 1]
    ) {
      left -= 1;
      right += 1;
    }
    return string.slice(left + 1, right - 1);
  }
  // 0~1 글자이거나 팰린드롬인 문자열 반환
  if (string.length < 2 || string === string.split('').reverse().join('')) {
    return string;
  }
  let result = ''; // 초기 세팅 (빈 문자열)
  for (let i = 0; i < string.length - 1; i++) {
    // 현재 최대 길이 팰린드롬 문자열과 현재 위치 i로 부터 짝수, 홀수 길이로 최대 팰린드롬 검사
    result = [result, expand(i, i + 1), expand(i, i + 2)].sort((a, b) => {
      return b.length - a.length; // 길이 기준 내림차순 sorting하여 가장 처음 값 반환
    })[0];
  }
  return result;
}
console.log(test1('My dad is a racecar athlete')); // a racecar a
// console.log(test1('aaaa level eye redivider hannah')); //( redivider )
/*
문제

Implement a function that finds the longest palindrome in a given string. Palindrome refers to the same word, whether read from the front or the back.

Constraints: Treat spaces as valid characters.

Examples:

in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". Count whitespaces as valid characters. Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
in the string "aaaa level eye redivider hannah", the longest palindrome is :" redivider ". Count whitespaces as valid characters. Other palindromes in the above string include "aaaa", " level ", " eye ", "hannah".
*/

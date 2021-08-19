// 입력 문자열이 거꾸로 배치되면 일치여부를 반환

// 조건
// 팰린드롬 함수는 재귀 함수형태로 쓰여진다
// for, while은 사용할 수 없다
// 불리언 값으로 리턴해야 한다
// 빈 문자열 일 경우 true 리턴
// 대소문자를 구별한다

// Failed Code -> Maximum call stack size exceeded
// function palindrome(str) {
//   if (str.length === 1 && str.length === 0) {
//     return true;
//   }
//   if (str[0] === str[str.length - 1]) {
//     newStr = str.slice(1, str.length - 1);
//     return palindrome(newStr);
//   } else {
//     return false;
//   }
// }

// Success Code
// function palindrome(str) {
//   if (str.length === 1 || str.length === 0) {
//     return true;
//   }
//   if (str[0] === str[str.length - 1]) {
//     newStr = str.slice(1, str.length - 1);
//     return palindrome(newStr);
//   } else {
//     return false;
//   }
// }

// Reference Code
function palindrome(str) {
  return isPalindrome(str, 0, str.length - 1);
}

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    //  if (str.charAt(start) !== str.charAt(end)) {
    return false;
  } else {
    return isPalindrome(str, start + 1, end - 1);
  }
}

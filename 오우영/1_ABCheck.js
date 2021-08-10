// a의 인덱스와 b의 인덱스 사이에 3개의 공간이 있다면 true
// a, b의 대소문자는 상관없음 -> 모두 소문자로 바꿔서 체크해도 됨

function ABCheck(str) {
  // code goes here
  if (str === undefined) {
    return false;
  }
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}

// failed Code
// function ABCheck(str) {
//   // code goes here
//   if(str === undefined) {
//     return false
//   }

//   let answer = false
//   let str = str.toLowerCase()
//   let aIndex = 0
//   let bIndex = 0

//   for(let i=0; i<str.length; i++) {
//     if(str[i] === 'a') {
//       aIndex = i
//     }
//     if(str[i] === 'b') {
//       bIndex = i
//     }
//     if(aIndex +4 === bIndex) {
//       answer = true
//       break
//     }
//   }
//   return answer
// }

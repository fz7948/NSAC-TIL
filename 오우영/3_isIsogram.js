// isIsogram은 반복되지 않는 문자열
// 대소문자를 무시 -> str을 소문자로
// 빈 문자열은 true

// indexOf로 가장 앞에있는 문자의 index를 찾고
// 그 문자와 같은 문자의 index가 indexOf의 index와 일치하는지 확인 -> 만약 다르다면 중복되는 문자열이 존재

// solution 1
let isIsogram = function (str) {
  // code goes here
  if (str === undefined) {
    return true;
  }
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

// solution 2 -> 존재하는 문자열을 객체의 key와 value = 1로 저장
// function isIsogram(str) {
//   if(str.length === 0) {
//     return true;
//   }

//   let storage = {};
//   let strLowerCase = str.toLowerCase();

//   for(let i = 0; i < strLowerCase.length; i++) {
//     if(storage[strLowerCase[i]]) {
//       return false;
//     }
//     storage[strLowerCase[i]] = 1;
//   }

//   return true;
// }

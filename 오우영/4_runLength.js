// 반복되는 문자열을 압축해서 리턴

// 반복되는 문자열을 파악하고 카운터를 해준다
// 뒤에 문자열과 비교하면서 같은 문자열이면 카운터를 올리고 다르면 카운터를 변수에 할당

function runLength(str) {
  // code goes here
  let count = 1;
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += `${count}${str[i]}`;
      count = 1;
    }
  }
  return answer;
}

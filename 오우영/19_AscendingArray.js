// 시작 parameter, 끝 parameter를 오름차순으로 정렬

// 조건 : 시작 parameter는 끝 parameter보다 항상 같거나 작아야한다
// 조건 : for, while 사용 x

// 재귀함수가 끝나는 조건 -> start와 end가 일치할 때
// ascendingArray를 호출하면서 parameter의 값을 end가 1 감소된 값으로
// 함수가 end가 1일 때 가장 먼저 return -> 2 -> 3....순서로 실행 : 입력값이 1,7일 경우

// solution 1
// function ascendingArray(start, end) {
//   if (start === end) {
//     return [end];
//   } else {
//     const result = ascendingArray(start, end - 1);
//     result.push(end);
//     return result;
//   }
// }

// solution 2
function ascendingArray(start, end) {
  let arr = [];
  if (start === end) {
    arr.push(end);
    return arr;
  }
  return ascendingArray(start, end - 1).concat(end);
}

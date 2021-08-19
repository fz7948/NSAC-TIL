/*
임의의 배열이 주어지면 배열의 내용을 뒤집는 함수를 작성
원래 배열 수정 x
Array.prototype.reverse()를 사용 x

*/

// solution 1
function reverseArray(array) {
  // your code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(...array.slice(array.length - 1 - i, array.length - i));
  }
  return result;
}

// solution 2
function reverseArray(array) {
  /* START SOLUTION */
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 0, array.pop());
  }
  return array;
  /* END SOLUTION */
}

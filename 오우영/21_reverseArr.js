/*
재귀 함수를 사용하여 역 배열을 반환하는 함수를 만들어라

## 조건
입력 배열은 초기 상태를 유지해야 한다
빈 배열일때는 있는 배열을 그대로 반환

## 수도 코드
1. 재귀는 반복! 하나씩 배열의 인덱스값을 더해서 추출
2. 종료 조건 -> 인덱스 값이 원래 배열의 인덱스를 초과하면 종료
3. 종료된 시점에서 해당 배열의 요소를 하나씩 push
 */

function reverseArr(arr) {
  // TODO: Write your code here.
  if (arr.length === 0) {
    return [];
  }
  let head = arr[0];
  let tail = arr.slice(1);
  return reverseArr(tail).concat(head);
}

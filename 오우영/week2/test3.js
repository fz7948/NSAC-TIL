/* 
누락된 숫자를 찾는 함수를 작성
1에서 N+1까지의 정수 중 하나가 누락된 무작위로 구성된 배열이 주어짐

## 조건
N은 1..100000 범위의 정수
배열 내에 중복 요소 x
누락된 요소가 없으면 last digit + 1을 반환
빈 배열이면 1을 반환

## 수도 코드
1. arr를 오름차순으로 정렬
2. 빈 숫자가 어디에 있는지 for문으로 확인
3. 만약 입력받은 배열이 오름차순으로 잘 정렬되어 있다면 length의 길이보다 +1된 값을 리턴

*/

function test3(arr) {
  // your code here
  if (arr === []) return 1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
}

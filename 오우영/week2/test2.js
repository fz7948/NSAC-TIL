/* 
문자열이 주어지면 동일한 문자의 가장 긴 실행을 찾고 해당 실행의 시작 및 끝 인덱스를 포함하는 배열을 반환
길이가 같은 두 개의 런이 있는 경우 첫번째 런을 반환

## 조건
길고 임의의 문자열로 함수를 시도하여 큰 입력을 잘 처리하는지 확인
1<= 문자열 <= 10,000

## 수도 코드
1. 빈 문자열이면 null 반환
2. 다음 인덱스와 비교
2-1. 인덱스가 같으면 count++
2-2. 인덱스가 다르면 count와 해당 인덱스의 str을 push하고 카운트 1로 초기화
3. count들의 최대값을 구함
4. 카운트가 제일 큰 값을 찾는다
4-1. 이전의 인덱스들을 더해준다.
4-2. 더해준 인덱스는 가장 긴 문자열의 첫번째 인덱스
4-2. 마지막 인덱스는 sum과 max의 길이에서 -1을 한 값
5. 두 개의 값을 리턴
5-1. 같은 문자의 길이가 존재해도 먼저있는 값이 리턴되면 함수가 종료되기 때문에 고려할 필요 x

*/

function test2(str) {
  // your code here
  if (str === "") return null;
  str = str.toLowerCase();
  let count = 1;
  let sum = 0;
  let numArr = [];
  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    if (str[i] !== str[i + 1]) {
      strArr.push(str[i]);
      numArr.push(count);
      count = 1;
    }
  }
  let max = Math.max(...numArr);

  for (let i = 0; i < strArr.length; i++) {
    if (max == numArr[i]) {
      return [sum, sum + max - 1];
    } else {
      sum += numArr[i];
    }
  }
}

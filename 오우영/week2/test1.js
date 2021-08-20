/*
로마 숫자를 입력으로 받은 함수를 구현하고 로마 숫자를 숫자로 변환하여 출력하는 함수를 작성
잘못된 입력에 대해 null 반환

##조건
큰 숫자 앞에 작은 숫자가 나타나면 빼기 연산
큰 숫자 앞에 작은 숫자가 하나만 나타날 수 있다고 가정
1 <= 로마숫자 <= 10,000
test1("IV") => 4 // I(1)이 V(5)보다 작기 때문에 5 + 1이 아니라 5 - 1
test1("LX") => 60

## 수도 코드
0. 잘못된 입력에 대해 null 반환
1. 문자열로 입력되는 값을 숫자로 바꿔줘야 한다
2. 바뀐 숫자를 비교해보고 큰 숫자 앞에 작은 숫자가 나타나면 빼고 나머지는 모두 더해준다
3. 그 값을 리턴
*/

function test1(romanNumeral) {
  // your code here
  if (typeof romanNumeral === "number") return null;
  const romaArr = [];
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    if (romanNumeral[i] === "") romaArr.push(0);
    if (romanNumeral[i] === "I") romaArr.push(1);
    if (romanNumeral[i] === "V") romaArr.push(5);
    if (romanNumeral[i] === "X") romaArr.push(10);
    if (romanNumeral[i] === "L") romaArr.push(50);
    if (romanNumeral[i] === "C") romaArr.push(100);
    if (romanNumeral[i] === "D") romaArr.push(500);
    if (romanNumeral[i] === "M") romaArr.push(1000);
  }

  for (let i = 0; i < romaArr.length; i++) {
    if (romaArr[i] < romaArr[i + 1]) {
      result += romaArr[i + 1] - romaArr[i];
      i++;
    } else {
      result += romaArr[i];
    }
  }

  return result;
}

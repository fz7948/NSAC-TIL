// 주어진 문자열은 숫자값 사이에 공백이 존재하는 문자열 -> split을 이용하여 배열화
// 각각의 인덱스가 문자열로 되어있는 배열을 map을 이용하여 숫자로 재할당
// 정렬되지 않은 숫자값들을 sort를 이용하여 정렬
// for문을 통해 인덱스들을 순회하며 존재하지 않는 숫자값을 찾아낸다 -> 1부터~n까지(인덱스가 1부터 시작)

function findMissingNumber(str) {
  // code goes here
  str = str.split(" ");
  str.sort((a, b) => a - b);
  str = str.map((el) => Number(el));
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== i + 1) {
      return i + 1;
    }
  }
}

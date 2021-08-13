// 주어진 배열안에서 짝수번 발생하는 첫번째 요소를 찾아라
// 짝수번 발생하는 경우가 여러번이라해도 첫번째만 리턴하면 된다
// 짝수번 발생하는 경우가 없다면 null을 리턴해라

// 배열안의 요소들을 반복문으로 순회한다
// 그 요소가 짝수의 갯수로 존재하는지 확인한다
// filter로 원하는 조건에 만족하는 새로운 배열을 만든다
// 조건문으로 조건을 만족하는 배열이라면 리턴한다 -> 반복문이 순차적으로 진행되어 첫번째 리턴이 가능
// 배열 전체를 순회해도 일치하는 값이 없다면 null을 리턴한다

// 시간 복잡도 O(N^2)

function evenOccurrence(arr) {
  // your code here
  for (let i = 0; i < arr.length; i++) {
    newArr = arr.filter((el) => el === arr[i]);
    if (newArr.length % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}

// "a b"에 빈 공간이 주어지고 a, b는 month와 day로 주어진다 -> split으로 a, b를 배열로 만들어 인덱스로 각각의 변수에 할당한다

// 1,3,5,7,8,10,12월은 31일
// 4,6,9,11월은 30일
// 2월은 28일

// 주어진 a의 month만큼 더해준다 -> sum
// 주어진 b의 day만큼 sum에 더해준다 -> count
// 요일의 수(7)만큼 count을 나눠준다

function day(str) {
  // code goes here
  let arr = str.split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  let count = sum + b;
  let answer = day[count % 7];
  return answer;
}

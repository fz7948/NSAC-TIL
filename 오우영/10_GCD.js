// 두 수의 최대공약수를 구해라

// 유클리드 호재법 적용
// 입출력 예시에는 양의 수만 적혀있는데 입력값에 조건이 없으므로 양수라는 조건을 달아준다

//? 유클리드 호제법
// ex 1
// 16 % 24 = 16
// 24 % 16 = 8
// 16 % 8 = 0
// ex 2
// 12 % 15 = 12
// 15 % 12 = 3 -> 전에 나눠준 값(max->tmp) % 전에 나머지(min%max)
// 12 % 3 = 0

// 꼭 처음부터 나눠주는 값이 제일 큰 수일 필요는 없다
// 처음부터 24 % 16으로 로직을 짜면 계산 코드가 한 줄 더 줄어들 수 있다

// 시간복잡도 O(logn)

function gcd(a, b) {
  // code goes here

  if (a <= 0 || b <= 0) {
    throw new Error("두 수는 양수여야 합니다");
  }

  let bigNum = a > b ? a : b;
  let smallNum = a > b ? b : a;

  while (smallNum > 0) {
    const remain = bigNum % smallNum;
    bigNum = smallNum;
    smallNum = remain;
  }

  return bigNum;
}

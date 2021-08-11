function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    const r = a % b;
    return gcd(b, r);
  } else {
    const r = b % a;
    return gcd(a, r);
  }
}

console.log(gcd(22, 24));

/*
  문제
Find the greatest common divisor of two numbers.

Examples:
1. Putting in 22 and 24 should yield 2.
2. Putting in 24 and 18 should yield 6.
3. Putting in 18 and 24 should yield 6.
4. Putting in 9999 and 111 should yield 3.

hint: Search for the Euclidean Algorithm.
*/

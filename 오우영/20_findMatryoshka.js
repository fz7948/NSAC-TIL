// 마트료시카 객체의 조건에 맞는 인형이 있는지 판단하고 반환

function findMatryoshka(matryoshka, size) {
  // your code here
  if (Object.keys(matryoshka).length === 0) return false;
  if (matryoshka.size === size) return true;
  if (matryoshka.matryoshka === null) return false;

  return findMatryoshka(matryoshka.matryoshka, size);
}

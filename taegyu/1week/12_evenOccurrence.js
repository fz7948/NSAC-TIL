function evenOccurrence(arr) {
  const map1 = new Map();
  let result = null;

  for (let item of arr) {
    if (map1.has(item)) {
      map1.set(item, map1.get(item) + 1);
    } else {
      map1.set(item, 1);
    }
  }
  for (let [key, value] of map1) {
    if (value % 2 === 0) {
      result = key;
      break;
    }
  }
  return result;
}

const onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

/*
문제
  Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

example usage:

const onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
*/

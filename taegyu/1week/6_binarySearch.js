function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
  }

  return null;
}

const index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3

/*
  Write a function

    function binarySearch(array, target);
Given a sorted array, find the index of an element, using a binary search algorithm.

Examples:
const index = binarySearch(1, 2, 3, 4, 5, 4);
console.log(index); // 3

Write an efficient algorithm for the following assumptions:

array.length is greater than or equal to 1 and less than or equal to 100,000.
element in array is an integer within the range 1.. 1,000,000
target is an integar within the range 1.. 1,000,000
*/

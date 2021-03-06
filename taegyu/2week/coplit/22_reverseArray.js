function reverseArray(array) {
  const reuslt = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reuslt.push(array[i]);
  }
  return reuslt;
}

console.log(reverseArray([1, 2, 3]));

/*
문제
Given an arbitrary input array, write a function that reverses the contents of the array (ie, without modifying the original array.)
Don't use the native Array.prototype.reverse() method.

Extra Credit: Reverse in-place (don't use an extra array).

Here's a sample input to get you going:

reverseArray(1, 8, 39, null, 2, 9, 'bob')0 // should equal => 'bob'
*/

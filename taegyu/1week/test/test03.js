function test3(matrix) {
  let row = 0;
  let col = -1;
  let sw = 1;
  let rowLeng = matrix.length;
  let colLeng = matrix[0].length;

  const result = [];

  while (true) {
    for (let j = 1; j <= colLeng; j++) {
      col += sw;
      result.push(matrix[row][col]);
    }
    rowLeng--;
    if (rowLeng <= 0) break;

    for (let j = 1; j <= rowLeng; j++) {
      row += sw;
      result.push(matrix[row][col]);
    }
    colLeng--;
    if (colLeng <= 0) break;
    sw *= -1;
  }
  return result;
}

console.log(
  test3([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  test3([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21],
    [22, 23, 24],
  ])
); //[1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20]

/*
문제

Take a two-dimensional array(i.e., an array containing many arrays of equal length) and return all the values in the array.

Constraints:
The spiral turns clockwise (start left -> right).
All elements of an array contain only numbers.
Empty arrays are not entered.
Based on the entire two-dimensional array, there are no identical elements(the same number).

example:

spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);

returns [1, 2, 3, 6, 9, 8, 7, 4, 5]

*/

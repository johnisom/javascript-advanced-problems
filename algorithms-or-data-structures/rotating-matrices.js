// Exercise 4

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

As we saw in the previous exercises, a matrix can be represented by an array
of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],

];

A 90-degree rotation of a matrix produces a new matrix in which each side of
the matrix is rotated clockwise by 90 degrees. For example, the 90-degree
rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90-degree rotation of a non-square matrix is similar. For example, given the
following matrix:

3  4  1
9  7  5

its 90-degree rotation is:

9  3
7  4
5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
90-degrees as described above, and returns the result as a new matrix. The
function should not mutate the original matrix.

Examples:

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Very similar to the last problem, take a matrix and transpose it. Instead,
this time we rotate it 90°, which is synonomous to first transposing it and
then reversing each new row.

Input
-----

- A matrix to be rotated

Output
------

- A new, rotated version of the input matrix

Rules
-----

- Transpose, then rotate
- Non mutating

Examples / Test Cases
---------------------

[ [ 1 5 8 ] [ 4 7 2 ] [ 3 9 6 ] ] → [ [ 3 4 1 ] [ 9 7 5 ] [ 6 2 8 ] ]
[ [ 3 7 4 2 ] [ 5 1 0 8 ] ]       → [ [ 5 3 ] [ 1 7 ] [ 0 4 ] [ 8  2 ] ]
[ [ 3 7 4 2 ] [ 5 1 0 8 ] ]     4x→ [ [ 3 7 4 2 ] [ 5 1 0 8 ] ]

Data Structure
--------------

- Same as last

Algorithm
---------

1. Using the previous exercise's solution, transpose the array
2. Map the newly transposed array to reverse each row

*/

const transpose = function transpose(matrix) {
  const newMatrix = Array.from({ length: matrix[0].length }, () => []);

  matrix.forEach((row, i) => (
    row.forEach((elem, j) => newMatrix[j][i] = elem)
  ));

  return newMatrix;
};

const rotate90 = (matrix) => transpose(matrix).map((row) => row.reverse());

// Test Cases

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1, [[3, 4, 1], [9, 7, 5], [6, 2, 8]]);
console.log(newMatrix2, [[5, 3], [1, 7], [0, 4], [8, 2]]);
console.log(newMatrix3, [[3, 7, 4, 2], [5, 1, 0, 8]]);

// Exercise 2

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A 3x3 matrix can be represented by an array of arrays: an outer array
containing three subarrays that each contain three elements. For example, the
3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

An array of arrays is sometimes called a "nested array" because each inner
subarray is nested inside an outer array. It also may be called a
"two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such
as array[][]), and include both the row index and column index within the
brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An
entire row in the matrix can be referenced using a single index: matrix[1] is
the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the
total number of columns by counting the number of elements in the
row. Unfortunately, a convenient notation for accessing an entire column does
not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the
rows and columns of the original matrix. For example, the transposition of the
matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays representing a 3x3 matrix, and
returns the transpose of the matrix. You should implement the function on your
own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new
matrix and leave the input matrix array unchanged.

Examples:

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Take a 3x3 matrix and transpose it. That means to switch the row and column
number for each element.

Input
-----

- A 3x3 matrix that has 3 arrays with each having 3 elements

Output
------

- A version of that matrix with the rows and columns transposed

Rules
-----

- Row and column numbers start at 0
- If a element's row is 2 and column 1, the new row is 1 and new column is 2
- The output array must be a 3x3 matrix with copies of the inner values
- The original matrix must not be mutated

Examples / Test Cases
---------------------

[ [ 1 5 8 ] [ 4 7 2 ] [ 3 9 6 ] ] → [ [ 1 4 3 ] [ 5 7 9 ] [ 8 2 6 ] ]

Data Structure
--------------

- A 3x3 empty matrix to build upon
- Double nested iterating integers for row and column indices

Algorithm
---------

1. Create an empty 3x3 matrix
2. Iterate through each row (i)
   i. Iterate through each column (j)
      a. Assign to the new matrix the old matrix values but with rows and
         columns switched
         - new[j][i] ← old[i][j]
3. Return new matrix

*/

const transpose = function transpose(matrix) {
  const newMatrix = Array.from({ length: matrix[0].length }, () => []);
  
  matrix.forEach((row, i) => (
    row.forEach((elem, j) => newMatrix[j][i] = elem)
  ));

  return newMatrix;
};

// Test Cases

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// Exercise 3

/**
 * The solution to the previous exercise already solved it, so here it is.
 */

const transpose = function transpose(matrix) {
  const newMatrix = Array.from({ length: matrix[0].length }, () => []);

  matrix.forEach((row, i) => (
    row.forEach((elem, j) => newMatrix[j][i] = elem)
  ));

  return newMatrix;
};

// Test Cases

console.log(transpose([[1, 2, 3, 4]]), [[1], [2], [3], [4]]);
console.log(transpose([[1], [2], [3], [4]]), [[1, 2, 3, 4]]);
console.log(transpose([[1]]), [[1]]);

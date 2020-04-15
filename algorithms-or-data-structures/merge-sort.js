// Exercise 6

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in
sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by
breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the
merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Examples:

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Given an array of all numbers or all srings, use the merge sort algorithm
in combination to the solution to the previous exercise to sort the array

Input
-----

- Array of any number of elements, all numbers or all strings

Output
------

- Array of the same elements but sorted

Rules
-----

- Number of elements can be 0, even, or odd
- No sparse arrays
- All elements are numbers or all elements are strings, no mixing


Examples / Test Cases
---------------------

[ 9 5 7 1 ]   → [ 1 5 7 9 ]
[ 5 3 ]       → [ 3 5 ]
[ 6 2 7 1 4 ] → [ 1 2 4 6 7 ]
[ 'Sue' 'Pete' 'Alice' 'Tyler' 'Rachel' 'Kim' 'Bonnie' ] → [ 'Alice' 'Bonnie' 'Kim' 'Pete' 'Rachel' 'Sue' 'Tyler' ]
[ 7 3 9 15 23 1 6 51 22 37 54 43 5 25 35 18 46 ] → [ 1 3 5 6 7 9 15 18 22 23 25 35 37 43 46 51 54 ]

Data Structure
--------------

- 2 arrays, one for left half and one for right half

Algorithm
---------

1. If length of array is 1, return array
2. Variable: half way index ← ceil length / 2
3. Variable: left half ← left half of input
4. Variable: right half ← right half of input
5. Return merge(mergeSort(left half), mergeSort(right half))

*/

const merge = function merge(arr1, arr2) {
  const result = [];
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];

  while (true) {
    if (arr1Copy.length === 0) return result.concat(arr2Copy);
    if (arr2Copy.length === 0) return result.concat(arr1Copy);

    result.push((arr1Copy[0] < arr2Copy[0] ? arr1Copy : arr2Copy).shift());
  }
};

const mergeSort = function mergeSort(arr) {
  if (arr.length === 1) return [...arr];

  return merge(mergeSort(arr.slice(0, arr.length / 2)),
               mergeSort(arr.slice(arr.length / 2)));
};

// Test Cases

console.log(mergeSort([9, 5, 7, 1]), [1, 5, 7, 9]);
console.log(mergeSort([5, 3]), [3, 5]);
console.log(mergeSort([6, 2, 7, 1, 4]), [1, 2, 4, 6, 7]);

console.log(
  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),
  ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
);

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]),
  [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54],
);

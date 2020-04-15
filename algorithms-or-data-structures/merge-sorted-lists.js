// Exercise 5

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that takes two sorted arrays as arguments, and
returns a new array that contains all the elements from both
input arrays in sorted order.

You may not provide any solution that requires you to sort the
result array. You must build the result array one element at a
time in the proper order.

Your solution should not mutate the input arrays.

Examples:

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Given 2 sorted arrays, merge them 1 element at a time so that you end up with
1 big sorted array

Input
-----

- 2 arrays of numbers

Output
------

- 1 array with all the numbers from the first 2 arrays sorted

Rules
-----

- Mutation of the input arrays is not allowed

Examples / Test Cases
---------------------

[ 1 5 9 ], [ 2 6 8 ] → [ 1 2 5 6 8 9 ]
[ 1 1 3 ], [ 2 2 ]   → [ 1 1 2 2 3 ]
[ ], [ 1 4 5 ]       → [ 1 4 5 ]
[ 1 4 5 ], [ ]       → [ 1 4 5 ]

Data Structure
--------------

- Array copies for popping from
- Result array that is initially empty and gets pushed to

Algorithm
---------

1. Variable: result ← []
2. Variable: arr1Copy ← arr1.slice()
3. Variable: arr2Copy ← arr2.slice()
4. Infinite loop
      i. If arr1Copy has length 0
         a. Push all arr2Copy elements to result
         b. Return result
     ii. Repeat i., but swap arr1Copy and arr2Copy
    iii. Shift from array with lesser element and push that element to result

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

// Test Cases

console.log(merge([1, 5, 9], [2, 6, 8]), [1, 2, 5, 6, 8, 9]);
console.log(merge([1, 1, 3], [2, 2]), [1, 1, 2, 2, 3]);
console.log(merge([], [1, 4, 5]), [1, 4, 5]);
console.log(merge([1, 4, 5], []), [1, 4, 5]);

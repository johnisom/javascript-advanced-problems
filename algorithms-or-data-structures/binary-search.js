// Exercise 7

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search
through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a
time, checking if the current business name is the one you're trying to find.

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name
before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search
such as this can take quite a long time.

A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that
you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example,
let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

// Yellow pages list of business names data:
var yellowPages = ['Apple Store', 'Bags Galore',
                   'Bike Store',  'Donuts R Us',
                   'Eat a Lot',   'Good Food',
                   'Pasta Place', 'Pizzeria',
                   'Tiki Lounge', 'Zooper'];

With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following
sequence happens:

 • Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
 • If the middle value is equal to 'Pizzeria', stop the search.
 • If the middle value is less than 'Pizzeria':
     □ Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
     □ Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
 • If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume
that the array argument will always be sorted.

Examples:

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Using a binary search algorithm, return the index of the provided item if the
provided item is present in the provided array, else return -1

Input
-----

- An array to be searched
- An element to find the index of

Output
------

- The index of element if it exists or -1

Rules
-----

- Must use binary search algorithm
- Input array is always sorted
- Can use recursive or procedural solution
  - I opt for procedural, easier to manage for finding index of item

Examples / Test Cases
---------------------

Seen below

Data Structure
--------------

- Bottom index (int): the bottom index for the slice of array currently being
  searched
- Top index (int): the top index for the slice of array currently being
  searched
- Middle index (int): the middle index for slice of array currently being
  searched
- Arr (array): the input array
- Elem (any): the element to find the index of

Algorithm
---------

1. Variable: bottom index ← 0
2. Variable: top index ← arr.length
3. Variable: middle index ← floor top / 2
4. Infinite loop
     i. If top index === bottom index return -1
    ii. If arr[middle index] === elem then return middle index
   iii. If arr[middle index] < elem
        Then:
        - bottom index ← middle index + 1
        - middle index ← floor top - bottom / 2
        Else if arr[middle index] > elem
        Then:
        - top index ← middle index
        - middle index ← floor top - bottom / 2

*/

const binarySearch = function binarySearch(arr, elem) {
  let botIdx = 0;
  let topIdx = arr.length;
  let midIdx;

  while (true) {
    midIdx = Math.floor((topIdx + botIdx) / 2);
    if (topIdx === botIdx) return -1;
    if (arr[midIdx] === elem) return midIdx;

    if (arr[midIdx] < elem) {
      botIdx = midIdx + 1;
    } else {
      topIdx = midIdx;
    }
  }
};

// Test Cases
// All should log true

const yellowPages = [
  'Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot',
  'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'
];

const numbers = [1, 5, 7, 11, 23, 45, 65, 89, 102];
const names = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'];

console.log(binarySearch(yellowPages, 'Pizzeria') === 7);     // true
console.log(binarySearch(yellowPages, 'Apple Store') ===  0); // true
console.log(binarySearch(numbers, 77) === -1);                // true
console.log(binarySearch(numbers, 89) === 7);                 // true
console.log(binarySearch(numbers, 5) === 1);                  // true
console.log(binarySearch(names, 'Peter') === -1);             // true
console.log(binarySearch(names, 'Tyler') === 6);              // true

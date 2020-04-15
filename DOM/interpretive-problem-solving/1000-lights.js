// Exercise 1

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@


You have a bank of switches before you, numbered from 1 to n.  Every switch is
connected to exactly one light that is initially off. You walk down the row of
switches and toggle every one of them. You walk back to the beginning of the
row and start another pass. On this second pass, you toggle switches 2, 4, 6,
and so on. On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this process
until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after n repetitions.

Examples:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2,  ,
and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@   My Information     @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@


Problem
-------
Given one argument, the number of switches, return an array of the lights that
are turned on at the end of all the toggling frenzy.

Rules
-----
- The only lights that will be on are the ones that are toggled an odd number
  of times.
- Lights are only toggled on a pass if the pass number is a factor of the
  number
- Therefore, if a number has an odd number of factors, it will remain on
- The only positive numbers with an odd number of factors are square numbers
- This problem is really asking for an array of all the perfect squares from 1
  up to the limit inclusive.

Examples / Test Cases
---------------------
-1    → null
1.5   → null
0     → []
1     → [1]
2     → [1]
3     → [1]
4     → [1, 4]
8     → [1, 4]
9     → [1, 4, 9]
100   → [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
200   → [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196]
10000 → [1², 2², 3², 4², 5², 6², …, 97², 98², 99², 100²]


Data Structure
--------------
A single array of perfect squares

Algorithm
---------
1. If switches is invalid, return null
   - Is invalid if not a non-negative integer
2. Variable: perfect squares ← []
3. Iterate from 1 up to floor(√switches), inclusive
   i. For each iteration, push the number² to perfect squares array
4. Return perfect squares array

Alternative Algorithm
---------------------
1. If switches is invalid, return null
   - Is invalid if not a non-negative integer
2. Return a new mapped array of length √switches
   i. Map should be (index + 1)²

*/

// With alternative algorithm
const lightsOn = function lightsOn(switches) {
  if (switches < 0 || switches % 1 !== 0) return null;

  return Array(Math.floor(switches**0.5)).fill().map((_, i) => (i + 1)**2);
};

// For comparing arrays in the test cases

const compArr = function compArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

// Test Cases
// All should output true

console.log(lightsOn(-1) === null);           // true
console.log(lightsOn(1.5) === null);          // true
console.log(compArr(lightsOn(0), []));        // true
console.log(compArr(lightsOn(1), [1]));       // true
console.log(compArr(lightsOn(2), [1]));       // true
console.log(compArr(lightsOn(3), [1]));       // true
console.log(compArr(lightsOn(4), [1, 4]));    // true
console.log(compArr(lightsOn(8), [1, 4]));    // true
console.log(compArr(lightsOn(9), [1, 4, 9])); // true
console.log(compArr(
  lightsOn(100), [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
)); // true
console.log(compArr(
  lightsOn(200), [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196]
)); // true

const tenThousandArr = [];
for (let i = 1; i <= 100; i += 1) {
  tenThousandArr.push(i**2);
}
console.log(compArr(lightsOn(10000), tenThousandArr)); // true

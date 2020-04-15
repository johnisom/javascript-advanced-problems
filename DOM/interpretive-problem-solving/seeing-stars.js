// Exercise 6

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that displays an 8-pointed star in an nxn grid, where n is an
odd integer that is supplied as an argument to the function. The smallest such
star you need to handle is a 7x7 grid (i.e., when n is 7).

Examples:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

- N: an odd integer greater than 7

Output
------

- No return value
- Logged to the console:
  - An 8-pointed star that is n tall and n wide.

Rules
-----

- There are three parts to a star:
  - Top:
    - Rows (counted by i): (n - 1) / 2
    - Leading spaces: i
    - Spaces inbetween asterisks: (n - 3) / 2 - i
    - Asterisks: 3
  - Middle:
    - Leading spaces: 0
    - Spaces inbetween asterisks: 0
    - Asterisks: n
  - Bottom:
    - Just an upside-down top

Data Structure
--------------

- Integer to iterate up to and down from for top and bottom halves
  - (n - 1) / 2
- Strings for repeating and concatenating and logging
  - "*"
  - " "

Algorithm
---------

1. Print out top half of star
   i. Iterate up from 0 up to and including (n - 3) / 2
     a. Variable: star row ← " " * i
     b. Star row ← star row + "*"
     c. Star row ← star row + " " * (n - 3) / 2 - i
     d. Star row ← star row + "*"
     e. Star row ← star row + " " * (n - 3) / 2 - i
     f. Star row ← star row + "*"
     g. Print star row
2. Print middle stripe of star
   - "*" * n
3. Print out bottom half of star
   i. Iterate down from (n - 3) / 2 down to and including 0
      - Follow sames steps as Step 1


*/

const star = function star(n) {
  for (let i = 0; i <= (n - 3) / 2; i += 1) {
    console.log(buildRow(n, i));
  }

  console.log('*'.repeat(n));

  for (let i = (n - 3) / 2; i >= 0 ; i -= 1) {
    console.log(buildRow(n, i));
  }
};

const buildRow = (n, i) => (
  ' '.repeat(i) + ('*' + ' '.repeat((n - 3) / 2 - i)).repeat(2) + '*'
);

// Test Cases
star(7);
// logs
//*  *  *
// * * *
//  ***
//*******
//  ***
// * * *
//*  *  *

star(9);
// logs
//*   *   *
// *  *  *
//  * * *
//   ***
//*********
//   ***
//  * * *
// *  *  *
//*   *   *
//

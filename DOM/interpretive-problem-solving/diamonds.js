// Exercise 2

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that displays a four-pointed diamond in an NxN grid, where N
is an odd integer supplied as an argument to the function. You may assume that
the argument will always be an odd integer.

Examples:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
=========================
Given an odd integer n, output to the console a non-hollow diamond with width
n and height n.

Input
-----
Odd integer n that represents the height and width of the diamond

Output
------
Logged to the console a diamond made with "*" chars

Rules
-----
- The amount of stars follows this pattern:
  - 1
  - 3
  - …
  - n-2
  - n
  - n-2
  - …
  - 3
  - 1
- The amount of spaces preceding the stars follows this pattern:
  - (n-1)/2
  - (n-3)/2
  - …
  - 1
  - 0
  - 1
  - …
  - (n-3)/2
  - (n-1)/2

Examples / Test Cases
=====================
    1
    _
    ↓
    *

    3
   ___
   ↓↓↓
    *
   ***
    *

    9
_________
↓↓↓↓↓↓↓↓↓

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Data Structure
==============
- Just strings for logging and numbers for counting.
- Numbers for asterisks
  - Starting at 1
  - Ending at n
  - Going up by 2
- Numbers for spaces
  - Starting at (n - 1) / 2
  - Ending at 0
  - Going down by 2 in parentheses, 1 outside

Algorithm
=========
1. Log top half of triangle, including middle row
    i. Iterate from 1 up to and including n (let's say i), increasing by 2
       each time
   ii. Log (n-i)/2 spaces concatenated with i asterisks
2. Log bottom half of triangle
    i. Iterate from n - 2 down to and including 1 (let's say i), decreasing
       by 2 each time.
   ii. Log (n-i)/2 spaces concatenated with i asterisks

@@@@@@@@@@@@@@@@@@@@@@@
@                     @
@ Further Exploration @
@                     @
@@@@@@@@@@@@@@@@@@@@@@@

Make hollow diamonds.

Rules
-----
- The preceding spaces are the same
- The left asterisk will always be one
- The right asterisk will be 0 on the first and last and 1 on all the others
- The middle spaces will be 0 on the first and last and i-2 on all the others

Algorithm
---------
1. Log top half of triangle, including middle row
     i. First log (n-1)/2 spaces and 1 asterisk
    ii. Iterate from 3 up to and including n (let's say i), increasing by 2
        each time
   iii. Each iteration, log (n-i)/2 spaces concatenated with 1 asterisk, i-2
        spaces, and 1 asterisk
2. Log bottom half of triangle
     i. Iterate from n-2 down to and including 3 (let's say i), decreasing by 2
        each time
    ii. Each iteration, log (n-i)/2 spaces concatenated with 1 asterisk,
        i-2 spaces, and 1 asterisk
   iii. Finally log (n-1)/2 spaces and 1 asterisk if n is greater than 1

*/

const diamond = function diamond(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
  }
};

const hollowDiamond = function hollowDiamond(n) {
  console.log(' '.repeat((n - 1) / 2) + '*');
  for (let i = 3; i <= n; i += 2) {
    console.log(`${' '.repeat((n - i) / 2)}*${' '.repeat(i - 2)}*`);
  }

  for (let i = n - 2; i >= 3; i -= 2) {
    console.log(`${' '.repeat((n - i) / 2)}*${' '.repeat(i - 2)}*`);
  }

  if (n > 1) {
    console.log(' '.repeat((n - 1) / 2) + '*');
  }
};

diamond(1);
/*

*

*/

diamond(3);
/*

 *
***
 *

 */

diamond(9);
/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

hollowDiamond(1);
/*

*

*/

hollowDiamond(3);
/*

 *
* *
 *

 */

hollowDiamond(9);
/*

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

*/

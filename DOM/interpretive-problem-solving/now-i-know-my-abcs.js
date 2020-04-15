// Exercise 3

/*

Problem Description
-------------------

Given these spelling blocks:

    B:O  X:K  D:Q  C:P  N:A
    G:T  R:E  F:S  J:W  H:U
    V:I  L:Y  Z:M

Return true or false depending on if you can spell a word using each block
only once.

Input: word string (only letters)
Output: boolean

Rules
-----

- Each block can be used only once
- Letters are case-insensitive
- Input always has length greater than 0
- Input always only has letters


Examples / Test Cases
---------------------

'BATCH'         → true
'BUTCH'         → false
'jest'          → true
'aa'            → false
'a'             → true
'bXdCnTeSwUvLz' → true


Data Structures
---------------

- Blocks
  - Array of arrays
    - Each subarray has 2 elements
      - First char of block
      - Second char of block
- Word
  - Regex
    - For checking for duplicate chars
  - Array of chars
    - For `includes` method


Algorithm
---------

1. Use regex to test if there are any duplicate chars
   - If there are, return false
2. Convert word to all uppercase
3. Split word into an array of chars
4. Iterate through all the blocks
   - If both block chars are in the array of chars, return false
5. Return true

*/

const isBlockWord = function isBlockWord(word) {
  if (/(.).*\1/.test(word)) return false;

  const blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                  ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  const chars = word.toUpperCase().split('');
  for (const block of blocks) {
    if (chars.includes(block[0]) && chars.includes(block[1])) return false;
  }

  return true;
};

// Test Cases
// All should outuput true

console.log(isBlockWord('BATCH'));         // true
console.log(!isBlockWord('BUTCH'));        // true
console.log(isBlockWord('jest'));          // true
console.log(!isBlockWord('aa'));           // true
console.log(isBlockWord('a'));             // true
console.log(isBlockWord('bXdCnTeSwUvLz')); // true

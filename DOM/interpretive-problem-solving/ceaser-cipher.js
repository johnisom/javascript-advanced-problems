// Exercise 4

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that implements the Ceasar Cipher. The Ceasar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positinos away in the alphabet. For example, if the letter 'A' is right-shifted by 3 position, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Ceaser Cipher only encrypts letters (including both upper and lower case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Examples:

// simple shift
ceasarEncrypt('A', 0);   // "A"
ceasarEncrypt('A', 3);   // "D"

// wrap around
ceasarEncrypt('y', 5);   // "d"
ceasarEncrypt('a', 47);  // "v"

// all letters 
ceasarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
ceasarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

Plaintext: a string of any characters
Key: an integer representing how many letters to shift
- Greater than or equal to 0

Output
------

Ciphertext: a string of encoded characters
- All non-letters are left as is
- Letters are rotated according to the key
- Same number of chars as plaintext

Rules
-----

- Plaintext can have any amount of any types of characters
- Key must be a non-negative integer
- Key can be greater than 26
  - If so, it acts as key % 26
- Only letters are rotated/encoded
  - They are rotated key positions further down the alphabet. To go backwards,
    use key ← 26 - target backwards shift number
- Upper case letters are rotated to an upper case letter
- Lower case letters are rotated to a lower case letter
- If a letter's position in the alphabet plus the key is greater than 26, it
  wraps around

Data Structure
--------------

Number for the char codes
- String.prototype.charCodeAt(0)
Number for the rotation
- key % 26
Number for shift amound depending on lower or upper case
- 65 or 97
Numbers for the remainder wrap-around
- (new char code - shift) % 26 + shift
String for the chars
- String.fromCharCode(num)
String for testing if lower or upper case
- char between 'a' and 'z' or char between 'A' or 'Z';

Algorithm
---------

1. Variable: result ← ''
2. Iterate through each char, adding the rotated version to result
     i. Variable: shift num
    ii. If upper case
        Then: shift num ← 65
        Else if lower case
        Then: shift num ← 97
        Else:
        - Add char to result
        - Next iteration
   iii. Add to result: char from char code (char code of char - shift num + key) % 26 + shift num)
3. Return result

*/

const ceasarEncrypt = function ceasarEncrypt(plaintext, key) {
  let result = '';

  for (const char of plaintext) {
    let shiftNum;

    if (char >= 'A' && char <= 'Z') {
      shiftNum = 65;
    } else if (char >= 'a' && char <= 'z') {
      shiftNum = 97;
    } else {
      result += char;
      continue;
    }

    const newCode = (char.charCodeAt(0) - shiftNum + key) % 26 + shiftNum;
    result += String.fromCharCode(newCode);
  }

  return result;
};

// Test Cases
// All should output true
console.log(ceasarEncrypt('A', 0) === 'A');  // true
console.log(ceasarEncrypt('A', 3) === 'D');  // true
console.log(ceasarEncrypt('y', 5) === 'd');  // true
console.log(ceasarEncrypt('a', 47) === 'v'); // true

console.log(ceasarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)
            === 'ZABCDEFGHIJKLMNOPQRSTUVWXY'); // true
console.log(ceasarEncrypt('The quick brown fox jumps over the lazy dog!', 5)
            === 'Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!'); // true
console.log(ceasarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2)
            === 'Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?'); // true

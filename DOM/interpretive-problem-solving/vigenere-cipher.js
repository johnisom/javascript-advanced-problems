// Exercise 5

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

The Vigenere Cipher encrypts alphabetic text using polyalphabetic
substitution. It uses a series of Caesar Ciphers based on the letters of a
keyword. Each letter of the keyword is treated as a shift value. For instance,
the letter 'B' corresponds to a shift value of 1, and the letter 'd'
corresponds to a shift value of 3. In other words, the shift value used for a
letter is equal to its index value in the alphabet.  This means that the
letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters
'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by
applying the current shift value to a Caesar Cipher for that particular
character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't
in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts
alphabetic characters.

Write a function that implements the Vigenere Cipher.  The case of the keyword
doesn't matter—in other words, the resulting encryption won't change depending
on the case of the keyword's letters (e.g., 'MEat' === 'mEaT).

For a quick lookup of a ciphertext per character, you may consult this tabula
recta. Each row of the table corresponds to a Caesar Cipher encryption using
the columns' character letter as a shift value.

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

Plaintext: string to be encoded, any chars allowed
Keyword: a string of only alphabetic characters that represents the key numbers 

Output
------

An encoded string that used the keyword and plaintext where non alphabetic
characters are the same and alphabetic characters are rotated according to
chars in keyword.

Data Structure
--------------

Array of keys for rotating individual letters
- Made from the uppercased version of the keyword with each letter mapped to
  its char code - 65
The rest is the same as exercise 4 pretty much

Algorithm
---------
1. Variable: result ← ''
2. Variable: key index ← 0
3. Variable: keys ← each keyword character mapped to the corresponding key
   number
    i. Convert keyword to upper case and split to array of chars
   ii. Map array of chars to char code of letter - 65
4. Iterate through each char, adding rotated version to result
     i. Variable: shift num
    ii. If upper case
        Then: shift num ← 65
        Else if lower case
        Then: shift num ← 97
        Else:
        - Add char to result
        - Next iteration
   iii. Add to result: shifted letter(char, keys[key index], shift num)
        a. String from char code of ((char code of char - shift num + key) %
           26 + shift num)
    iv. key index ← (key index + 1) % keyword length
5. Return result

*/

const vignereEncode = function vignereEncode(plaintext, keyword) {
  let result = '';
  let keyIndex = 0;
  const keywordLength = keyword.length;
  const keys = keyword.toUpperCase().split('').map((char) => (
    char.charCodeAt(0) - 65
  ));

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

    result += shiftedLetter(char, keys[keyIndex], shiftNum);
    keyIndex = (keyIndex + 1) % keywordLength;
  }

  return result;
};

const shiftedLetter = (char, key, shiftNum) => (
  String.fromCharCode((char.charCodeAt(0) - shiftNum + key) % 26 + shiftNum)
);

// Test Cases
// All should output true
console.log(vignereEncode('hello', 'a') === 'hello'); // true
console.log(vignereEncode('hello', 'c') === 'jgnnq'); // true
console.log(vignereEncode('hello world', 'ac') === 'hglno yotlf'); // true
console.log(vignereEncode("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!"); // true


// Exercise 1

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Let's build another program using madlibs. We made a similar program in the
Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a
selection of randomized nouns, verbs, adjectives, and adverbs into that text,
and then returns it. You can build your lists of nouns, verbs, adjectives, and
adverbs directly into your program. Your program should read this text and,
for each line, place random words of the appropriate types into the text and
return the result.

The challenge of this program isn't just about writing your
solution—it'seabout choosing the structure of the texut template. Choose the
right way to structure your template and this problem becomes much
easier. Consequently, this exercise is a bit more open-ended since the input
is also something that you'll be defining.

Examples:

Note: The quotes in the example strings returned by the madlibs function are
only shown for emphasis. These quotes are not present in the actual output
strings. The words in quotes come from the list of texts and it is the madlibs
function that puts them in.

function madlibs(template) {
  // ...

}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Given a template string (of which I define), fill in all the template spots
with the corresponding types of words given in the template spots. The types
of words are hard-coded into the function and chosen at random.

Input
-----

- Template: a string representing a template to sub out areas for verbs,
  adjectives, nouns, and advervs

Output
------

- A string that has all the template spots filled by random selections of the
  corresponding types of words

Rules
-----

- I'm Chosing my own rules here
- Templates are normal strings that have ${wordType} included in them
  - wordType is one of: adjective, noun, adverb, verb
- From a few lists of types of words that I choose, choose one randomly for each ${wordType}
- Words can be used more than once

Examples / Test Cases
---------------------

template1 → "The sleepy brown cat noisily licks the sleepy yellow dog, who lazily licks his tail and looks around."
template1 → "The hungry brown cat lazily licks the noisy yellow dog, who lazily licks his leg and looks around."
template2 → "The fox bitest the dog's tail."
template2 → "The cat pats the cat's head."

Data Structure
--------------

- String for the template
- Regex for replacing template areas with actual values

Algorithm
---------

1. Initialize and populate noun, adverb, verb, and adjective arrays
2. Replace all template areas with the corresponding type of word
   i. Use a regex replace with a callback function
      - Regex looks like this: /${(noun|adjective|adverb|verb)}/g
      - Callback looks like this:
        a. Switch capture group
           Case noun: return sample from noun array
           Case adjective: return sample from adjective array
           Case verb: return sample from verb array
           Case adverb: return sample from adverb array
        - To get a sample, do arr[Math.floor(Math.random() * arr.length)]
3. Return replaced template string

*/

const madlibs = function madlibs(template) {
  const nouns = ['cat', 'dog', 'tail', 'leg', 'fox', 'head'];
  const adjectives = ['sleepy', 'hungry', 'noisy'];
  const verbs = ['licks', 'bites', 'pats'];
  const adverbs = ['noisily', 'lazily'];

  return template.replace(/\${(\w+)}/g, (_, wordType) => {
    switch (wordType) {
    case 'noun': return sample(nouns);
    case 'adjective': return sample(adjectives);
    case 'verb': return sample(verbs);
    case 'adverb': return sample(adverbs);
    default: return `$\{${wordType}}`;
    }
  });
};

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Test Cases

const template1 = 'The ${adjective} brown ${noun} ${adverb} ${verb} the ' +
      '${adjective} yellow ${noun}, who ${adverb} ${verb} his ${noun} and ' +
      'looks around.';
const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}";

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));

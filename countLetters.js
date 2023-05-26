const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f6d1}\u{1f6d1}\u{1f6d1} Assertion Failed : ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 7);

/*The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence
- create an empty object to store letter counts
- for ...of loop to iterate over each letter in str.
- if there is space skip & check next letter
- if letter already exists - increment by 1 otherwise
initialze count to 1 */

const countLetters = function(str) {
  let letterCount = {};
  for (let letter of str) {
    if (letter === ' ') {
      continue;
    }
  
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("light house") ["e"], 3);
assertEqual(countLetters("Hello World")["l"], 3);

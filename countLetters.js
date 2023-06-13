const assertEqual = require('./assertEqual');

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
 const result = countLetters("lighthouse in the house");
let output = '{\n';
for(let key in result) {
  output += `  ${key}: ${result[key]},\n`;
}
output += '}';
module.exports = countLetters;

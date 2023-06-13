const assertArraysEqual = require('./assertArraysEqual');

/*implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found*/
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === ' ') {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};
module.exports = letterPositions;
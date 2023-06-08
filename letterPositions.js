const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};
/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/

const assertArraysEqual = function(B1, B2) {
  if (eqArrays(B1, B2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};

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
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);
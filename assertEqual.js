const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f6d1}\u{1f6d1}\u{1f6d1} Assertion Failed : ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;
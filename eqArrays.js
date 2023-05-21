const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(A1, A2) {
  if (A1.length !== A2.length) {
    return false;
  }
  for (let i = 0; i <= A1.length; i++) {
    if (A1[i] !== A2[i]) {
      return false;
    }
  }
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3, 0], [3, 1, 0]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
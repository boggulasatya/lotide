const eqArrays = function(A1, A2) {
  if (A1.length !== A2.length) {
    return false;
  }
  for (let i = 0; i < A1.length; i++) {
    if (A1[i] !== A2[i]) {
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "hi"]);

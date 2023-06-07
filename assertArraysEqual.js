const eqArrays = require('./eqArrays');
/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};
module.exports = assertArraysEqual;


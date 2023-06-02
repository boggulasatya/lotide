
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

const assertArraysEqual = function(b1, b2) {
  if (eqArrays(b1, b2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);




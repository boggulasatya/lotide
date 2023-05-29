const assertArraysEqual = function(B1, B2) {
  if (eqArrays(B1, B2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "hi"]);





const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);


/* 1st Case Square numbers in an array*/

const numbers = [5, 6, 8, 10];
const square = num => num * num;

const expected = [25, 36, 64, 100];
const result = map(numbers, square);
assertArraysEqual(result, expected);


/* 2nd case convert letters to Uppercase*/

const string = ["hi", "world"];
const toUpperCase = string => string.toUpperCase();

const caps = ["HI", "WORLD"];
const final = map(string, toUpperCase);
assertArraysEqual(final, caps);

/* Object */

const people = [{name: 'Peter', height: '40'},
  {name: 'Bao', height: '35'}];
const getHeight = person => person.height;
const age = ['40', '35'];
const output = map(people, getHeight);

assertArraysEqual(output, age);







const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1]));// => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3]));
console.log(middle([1, 3, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([6, 7, 3]), [7]);
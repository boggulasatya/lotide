
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3, 0], [3, 1, 0]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
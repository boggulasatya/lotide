const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(flatten([2, 4,[1, 2],5, [6,7]]), [2, 4, 1, 2, 5, 6, 7]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, ['hi']]), [1, 'hi']);
assertArraysEqual(flatten([2, 4,[1, 2],5, [6,7]]), [2, 4, 1, 2, 5, 6, 7]);

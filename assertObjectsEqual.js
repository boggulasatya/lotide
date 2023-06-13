const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u{1f6d1}\u{1f6d1}\u{1f6d1} Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
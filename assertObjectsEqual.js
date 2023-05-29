

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // objects have same number of keys or not//
  if (keys1.length !== keys2.length) {
    return false;
  }


  //comparing values are objects are not//

  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u{1f6d1}\u{1f6d1}\u{1f6d1} Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);


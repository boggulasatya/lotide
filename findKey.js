const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f6d1}\u{1f6d1}\u{1f6d1} Assertion Failed : ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;

    }
  }
  return undefined;
};

const output = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"



assertEqual(output, "noma");
assertEqual(output, "Blue Hill");
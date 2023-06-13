const assertEqual = require('./assertEqual');

//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj, value) {
  for (let keys of Object.keys(obj)) {
    if (obj[keys] === value) {
      return keys;

    }
  }
  return undefined;
};

module.exports = findKeyByValue;
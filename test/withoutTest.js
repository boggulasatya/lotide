const assertArraysEqual = require('../assertArraysEqual')

const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); 
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without([1, 2, 3], [1, 2]));
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);

const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const numbers = [5, 6, 8, 10];
const square = num => num * num;
const expected = [25, 36, 64, 100];
const result = map(numbers, square);
assertArraysEqual(result, expected);

const string = ["hi", "world"];
const toUpperCase = string => string.toUpperCase();
const caps = ["HI", "WORLD"];
const final = map(string, toUpperCase);
assertArraysEqual(final, caps);

const people = [{name: 'Peter', height: '40'},
  {name: 'Bao', height: '35'}];
const getHeight = person => person.height;
const age = ['40', '35'];
const output = map(people, getHeight);
assertArraysEqual(output, age);

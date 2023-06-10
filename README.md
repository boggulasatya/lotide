# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose
Lotide is Javascript library created for learning purposes, offering practical implemenation of utility functions found in popular libraries like Lodash. It serves as a tool for developers to enhance their Javascript skills and gain hands-on experience in building commonly used functions.

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bsatya/lotide`

**Require it:**

`const _ = require('@bsatya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation

The following functions are currently implemented:

* `tail(...)`: function takes in an array and returns everything except the first element of the array.

* `assertArraysEqual(...)`: function takes two arrays & checks if they are equal in length & values.

* `assertEqual(...)`: function compares two values(strings or numbers) and checks if they are equal or not.

* `eqObjects(...)`: function takes two objects as input and returns true if they are equal in terms of their key-value pairs, and false otherwise.

* `eqArrays(...)`: function takes two arrays as input and returns true if they are equal in terms of their elements, and false otherwise.

* `assertObjectsEqual(...)`: function takes two objects as input and logs a message indicating whether they are equal or not.

* `findKey(...)`: function takes an object and a callback function as input and returns the first key for which the callback returns a truthy value.

* `findKeyByValue(...)`: function takes an object and a value as input and returns the first key that corresponds to that value. 

* `flatten(...)`: function takes an array with nested arrays as input and returns a new array that contains all the elements from the nested arrays flattened into a single level.

* `head(...)`: Function takes an array as input and returns the first element of the array.

* `map(...)`: function takes an array and a callback function as input and returns a new array with the results of applying the callback function to each element of the input array.

* `middle(...)`: function takes an array as input and returns a new array containing the middle element(s) of the input array.

* `takeUntil(...)`: function takes an array and a callback function as input and returns a new array that contains elements from the input array until the callback returns a truthy value.

* `without(...)`:  function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

* `letterPositions(...)`: function takes a sentence (string) as input and returns an object that maps each letter to an array of its positions in the sentence.

* `countLetters(...)` : function take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly(...)`: function takes in an array of strings and an Object for what strings to count.
 
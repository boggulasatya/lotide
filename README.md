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

* `const tail = function(arr)`: It returns all elements in an array except first element.

* `const assertArraysEqual = function(a1, a2)`: It compares two arrays a1 and a2 and checks if they are equal or not.

* `const assertEqual = function(actual, expected)`: It  compares two values(strings or numbers) actual and expected and checks if they are equal.

* `const eqObjects = function(object1, object2)`: It takes two objects as input and returns true if they are equal in terms of their key-value pairs, and false otherwise.

* `const eqArrays = function(a1, a2)`: It takes two arrays as input and returns true if they are equal in terms of their elements, and false otherwise.

* `const assertObjectsEqual = function(actual, expected)`: It takes two objects as input and logs a message indicating whether they are equal or not.

* `const findKey = function(obj, callback)`: It takes an object and a callback function as input and returns the first key for which the callback returns a truthy value.

* `const findKeyByValue = function(obj, value)`:It takes an object and a value as input and returns the first key that corresponds to that value. 

* `const flatten = function(arr1)`: It takes an array with nested arrays as input and returns a new array that contains all the elements from the nested arrays flattened into a single level.

* `const head = function(arr)`: It takes an array as input and returns the first element of the array.

* `const map = function(array, callback)`: It takes an array and a callback function as input and returns a new array with the results of applying the callback function to each element of the input array.

* `const middle = function(array)`: It takes an array as input and returns a new array containing the middle element(s) of the input array.

* `const takeUntil = function(array, callback)`: It takes an array and a callback function as input and returns a new array that contains elements from the input array until the callback returns a truthy value.

* `const without = function(sourceA, itemsToRemove)`:  It takes in two parameters: sourceA (an array) and itemsToRemove (an array). It returns a new array with elements from sourceA that are not present in itemsToRemove.

* `const letterPositions = function(sentence)`: It takes a sentence (string) as input and returns an object that maps each letter to an array of its positions in the sentence.

* `const countLetters = function(str)` : It take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `const countOnly = function(allItems, itemsToCount)`: It takes in two parameters: allItems (an array) and itemsToCount (an object). It counts the occurrences of specific elements specified in the itemsToCount object within the allItems array.
 
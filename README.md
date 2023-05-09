# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dmurphy22/lotide`

**Require it:**

`const _ = require('@dmurphy22/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr, arr2)`: Takes in two arrays, if identical returns positive message, if false returns negative. 
* `assertEqual(actual, expected)`: Checks two values and if they are equal returns a possitve message, if not returns negative.
* `head(arr)`: Returns the first element of an array. 

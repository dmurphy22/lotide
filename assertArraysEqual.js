const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr,arr2)) {
    console.log(`Assertion Passed: ${arr} === ${arr2}`);
    return;
  }
  console.log(`Assertion Failed: ${arr} !== ${arr2}`);

};

module.exports = assertArraysEqual;
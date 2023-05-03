const eqArrays = function(arr, arr2) {
  if (arr.length !== arr2.length)
    return false;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== arr2[i])
      return false;

  return true;

};

const assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr,arr2)) {
    console.log(`Assertion Passed: ${arr} === ${arr2}`);
    return;
  }
  console.log(`Assertion Failed: ${arr} !== ${arr2}`);

};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
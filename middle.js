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

const middle = function(array) {
  if (array.length < 3)
    return [];
  
  let arrayLength = array.length;
  let midpoint = Math.floor(arrayLength / 2);
 
  if (arrayLength % 2 === 0) {
    return [array[midpoint - 1], array[midpoint]];
  }
  return [array[midpoint]];

};
assertArraysEqual(middle([1, 2, 3]), [ 2 ]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6]);
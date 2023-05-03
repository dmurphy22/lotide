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

const without = function(arr,arr2) {
  if (arr.length < 1 || eqArrays(arr,arr2))
    return [];

  for (let i = 0; i < arr2.length; i++) {
    const char = arr.indexOf(arr2[i]);
    if (char >= 0)
      arr.splice(char,1);
  }
  return arr;
  
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
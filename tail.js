const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  }
  return `Assertion Failed: ${actual} !== ${expected}`;

};

const tail = function(arr) {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
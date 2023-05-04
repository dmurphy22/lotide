const assertObjectsEqual = function(actual, expected) {
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(expected,key) || actual[key] !== expected[key]) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
  }

  
};

let obj1 = {name: "Darragh"};
let obj2 = {name: "Darragh"};

assertObjectsEqual(obj1,obj2);
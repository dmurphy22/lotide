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

module.exports = assertObjectsEqual;
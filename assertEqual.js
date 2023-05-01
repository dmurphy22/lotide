// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return "Assertion Passed: " + actual + " === " + expected;
  }
  return "Assertion Failed:" + actual + "!==" + expected;

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
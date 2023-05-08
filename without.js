const _ = require("./index");
const without = function(arr,arr2) {
  if (arr.length < 1 || _.eqArrays(arr,arr2))
    return [];

  for (let i = 0; i < arr2.length; i++) {
    const char = arr.indexOf(arr2[i]);
    if (char >= 0)
      arr.splice(char,1);
  }
  return arr;
  
};


module.exports = without;
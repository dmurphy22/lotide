const takeUntil = function(array, callback) {
  let returnArray = [];
  for (let e of array) {
    if (callback(e) === true) {
      break;
    }
    returnArray.push(e);
  }
  return returnArray;
};

module.exports = takeUntil;
const tail = function(arr) {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

module.exports = tail;
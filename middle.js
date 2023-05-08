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

module.exports = middle;
const flatten = function(arr) {
  let flattenedArray = [];
  
  if (arr.length < 1)
    return false;
  for (let e of arr) {
    if (!Array.isArray(e)) {
      flattenedArray.push(e);
      continue;
    }
    for (let j of e) {
      flattenedArray.push(j);
    }

  }
  return flattenedArray;
};
module.exports = flatten;
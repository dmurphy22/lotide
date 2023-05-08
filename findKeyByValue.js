const findKeyByValue = function(obj, val) {
  for (let show in obj) {
    if (obj[show] === val) {
      return show;
    }
    
  }
  return undefined;
  
};
module.exports = findKeyByValue;
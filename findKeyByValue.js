const findKeyByValue = function(obj, val) {
  for (let show in obj) {
    if (obj[show] === val) {
      return show;
    }
    
  }
  return undefined;
  
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

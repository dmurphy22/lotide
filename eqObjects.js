const eqArrays = function(arr, arr2) {
  if (arr.length !== arr2.length)
    return false;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== arr2[i])
      return false;

  return true;

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;

      }
    } else if (object1[key] !== object2[key])
      return false;
  }

  return true;

};


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);
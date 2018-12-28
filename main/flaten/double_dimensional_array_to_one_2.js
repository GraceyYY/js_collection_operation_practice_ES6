'use strict';

function double_to_one(collection) {
  let flatArr = collection.reduce((flat, item) => {
    return flat.concat(item);
  });
  let noRepeat = new Set(flatArr);
  let result = [];
  for (let item of noRepeat) {
    result.push(item);
  }
  return result;
}
module.exports = double_to_one;
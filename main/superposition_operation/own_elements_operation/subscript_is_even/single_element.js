'use strict';
var single_element = function(collection) {
  let oddIndex = collection.filter((item, index) => {
    return index % 2 != 0;
  });
  let result = [];
  oddIndex.forEach(item => {
    if (oddIndex.indexOf(item) === oddIndex.lastIndexOf(item)) {
      result.push(item);
    }
  })
  return result;
};
module.exports = single_element;
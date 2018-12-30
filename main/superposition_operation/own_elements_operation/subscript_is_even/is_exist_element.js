'use strict';
var is_exist_element = function(collection, element) {
  let evenIndex = collection.filter((item, index) => {
    return index % 2 === 0;
  });
  return evenIndex.includes(element);
};
module.exports = is_exist_element;
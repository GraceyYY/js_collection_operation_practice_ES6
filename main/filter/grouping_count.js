'use strict';

function grouping_count(collection) {
  let result = {};
  collection.forEach(item => {
    result[item] = result[item] ? result[item] + 1 : 1;
  });
  return result;
}
module.exports = grouping_count;
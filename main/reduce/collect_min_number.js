'use strict';

function collect_min_number(collection) {
  return collection.reduce((min, item) => {
    return min > item ? item : min;
  });
}
module.exports = collect_min_number;
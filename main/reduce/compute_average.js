'use strict';

function compute_average(collection) {
  return collection.reduce((average, item, index) => {
    return index === collection.length - 1 ? (average + item) / collection.length : average + item;
  });
}
module.exports = compute_average;
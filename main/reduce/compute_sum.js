'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, item) => {
    return sum + item;
  });
}
module.exports = calculate_elements_sum;
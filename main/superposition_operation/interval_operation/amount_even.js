'use strict';

function amount_even(collection) {
  return collection.filter(item => {
    return item % 2 === 0;
  }).reduce((sum, item) => {
    return sum + item;
  });
}
module.exports = amount_even;
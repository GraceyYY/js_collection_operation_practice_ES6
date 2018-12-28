'use strict';

function find_last_even(collection) {
  return collection.reverse().find(item => {
    return item % 2 === 0;
  });
}
module.exports = find_last_even;
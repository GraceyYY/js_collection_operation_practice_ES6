'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(item => {
    return item % 2 != 0;
  }).reduce((sum, item) => {
    return sum + (item * 3 + 5);
  }, 0);
}
module.exports = hybrid_operation_to_uneven;
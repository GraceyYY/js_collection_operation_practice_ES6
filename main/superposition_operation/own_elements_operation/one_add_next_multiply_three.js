'use strict';

function one_add_next_multiply_three(collection) {
  let result = [];
  collection.forEach((item, index, arr) => {
    if (index < arr.length - 1) {
      result.push((item + arr[index + 1]) * 3);
    }
  });
  return result;
}
module.exports = one_add_next_multiply_three;
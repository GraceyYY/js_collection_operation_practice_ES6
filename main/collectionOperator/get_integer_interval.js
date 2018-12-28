'use strict';

function get_integer_interval(number_a, number_b) {
  return number_a <= number_b ? getArr(number_a, number_b) : getArr(number_b, number_a).reverse();
}

function getArr(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
module.exports = get_integer_interval;
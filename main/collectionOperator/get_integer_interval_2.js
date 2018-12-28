'use strict';

function get_integer_interval_2(number_a, number_b) {
  return number_a <= number_b ? getEvenArr(number_a, number_b) : getEvenArr(number_b, number_a).reverse();
}

function getEvenArr(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result.filter(item => {
    return item % 2 === 0;
  });
}
module.exports = get_integer_interval_2;
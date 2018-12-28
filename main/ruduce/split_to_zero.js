'use strict';

function spilt_to_zero(number, interval) {
  let result = [number];
  while (number > 0) {
    number = Math.round((number - interval) * 100) / 100;
    result.push(number);
  }
  return result;
}
module.exports = spilt_to_zero;
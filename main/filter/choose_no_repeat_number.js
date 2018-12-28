'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  let noRepeat = new Set(collection);
  for (let item of noRepeat) {
    result.push(item);
  }
  return result;
}
module.exports = choose_no_repeat_number;
'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function get_letter_interval(number_a, number_b) {
  return number_a <= number_b ? getLetterArr(number_a, number_b) : getLetterArr(number_b, number_a).reverse();
}

function getLetterArr(start, end) {
  let result = [];
  for (let i = start - 1; i < end; i++) {
    result.push(LETTER[i]);
  }
  return result;
}
module.exports = get_letter_interval;
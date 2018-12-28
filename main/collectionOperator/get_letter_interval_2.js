'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function get_letter_interval_2(number_a, number_b) {
  let start = number_a <= number_b ? number_a : number_b;
  let end = number_a <= number_b ? number_b : number_a;
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(getLetter(i));
  }
  return number_a <= number_b ? result : result.reverse();
}

function getLetter(index) {
  if (index <= 26) {
    return LETTER[index - 1];
  } else {
    let int = Math.floor((index - 1) / 26);
    return getLetter(int) + getLetter(index - int * 26);
  }
}
module.exports = get_letter_interval_2;
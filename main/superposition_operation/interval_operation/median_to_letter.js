'use strict';

function median_to_letter(collection) {
  let index = Math.ceil(compute_median(collection));
  return getLetter(index);
}

function compute_median(collection) {
  let arr = collection.sort((a, b) => a - b);
  return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[Math.floor(arr.length / 2)];
}

function getLetter(index) {
  const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  if (index <= 26) {
    return LETTER[index - 1];
  } else {
    let int = Math.floor((index - 1) / 26);
    return getLetter(int) + getLetter(index - int * 26);
  }
}
module.exports = median_to_letter;
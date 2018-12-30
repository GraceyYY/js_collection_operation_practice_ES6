'use strict';

function average_to_letter(collection) {
  let avr = collection.reduce((average, item, index) => {
    return index === collection.length - 1 ? (average + item) / collection.length : average + item;
  });
  return getLetter(Math.ceil(avr));
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
module.exports = average_to_letter;
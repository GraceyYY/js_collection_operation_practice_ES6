'use strict';

function even_to_letter(collection) {
  return collection.filter(item => {
    return item % 2 === 0;
  }).map(item => getLetter(item));
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
module.exports = even_to_letter;
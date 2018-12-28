'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number_map_to_word_over_26 = function(collection) {
  return collection.map(item => getLetter(item));
};

function getLetter(index) {
  if (index <= 26) {
    return LETTER[index - 1];
  } else {
    let int = Math.floor((index - 1) / 26);
    return getLetter(int) + getLetter(index - int * 26);
  }
}
module.exports = number_map_to_word_over_26;
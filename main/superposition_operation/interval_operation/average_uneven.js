'use strict';

function average_uneven(collection) {
  return collection.filter(item => {
    return item % 2 != 0;
  }).reduce((avr, item, index, arr) => {
    return index === arr.length - 1 ? (avr + item) / arr.length : avr + item;
  }, 0);
}
module.exports = average_uneven;
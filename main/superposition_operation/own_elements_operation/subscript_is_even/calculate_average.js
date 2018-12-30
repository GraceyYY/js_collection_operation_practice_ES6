'use strict';
var calculate_average = function(collection) {
  return collection.filter((item, index) => {
    return index % 2 != 0;
  }).reduce((avr, item, index, arr) => {
    return index === arr.length - 1 ? (avr + item) / arr.length : avr + item;
  })
};
module.exports = calculate_average;
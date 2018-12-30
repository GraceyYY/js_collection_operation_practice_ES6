'use strict';
var even_group_calculate_average = function(collection) {
  let arr = collection.filter((item, index) => {
    return index % 2 != 0 && item % 2 === 0;
  });
  let result = [];
  if (arr.length === 0) {
    result = [0];
  } else {
    let tmp = evenGroup(arr);
    let keys = Object.keys(tmp).sort((a, b) => a - b);
    keys.forEach(item => {
      result.push(average(tmp[item]));
    });
  }
  return result;
};

function average(collection) {
  return collection.reduce((avr, item, index, arr) => {
    return index === arr.length - 1 ? (avr + item) / arr.length : avr + item;
  });
}

function evenGroup(collection) {
  let tmp = {};
  collection.forEach(item => {
    let key = item.toString().length;
    if (tmp[key]) {
      tmp[key].push(item);
    } else {
      tmp[key] = [item];
    }
  });
  return tmp;
}
module.exports = even_group_calculate_average;
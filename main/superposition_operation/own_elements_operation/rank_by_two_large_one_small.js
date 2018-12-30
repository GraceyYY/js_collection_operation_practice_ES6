'use strict';

function rank_by_two_large_one_small(collection) {
  let arr = collection.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i <= Math.floor(arr.length / 3); i++) {
    let begin = i * 3;
    let end = begin + 3;
    let slice = end < arr.length ? swapPosition(arr.slice(begin, end)) : arr.slice(begin);
    result.push(...slice);
  }
  return result;
}

function swapPosition(arr) {
  arr.push(arr.shift());
  return arr;
}
module.exports = rank_by_two_large_one_small;
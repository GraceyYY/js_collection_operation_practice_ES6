'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->').map(item => parseInt(item)).sort((a, b) => a - b);
  return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[Math.floor(arr.length / 2)];
}
module.exports = compute_chain_median;
'use strict';
var calculate_median = function(collection) {
  let even = collection.filter((item, index) => {
    return index % 2 != 0;
  });
  return compute_median(even);
};

function compute_median(collection) {
  let arr = collection.sort((a, b) => a - b);
  return arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[Math.floor(arr.length / 2)];
}
module.exports = calculate_median;
'use strict';

function collect_max_number(collection) {
  return collection.reduce((max, item) => {
    return max < item ? item : max;
  })
}
module.exports = collect_max_number;
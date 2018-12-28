'use strict';

function get_union(collection_a, collection_b) {
  let union = new Set([...collection_a, ...collection_b]);
  let result = [];
  for (let item of union) {
    result.push(item);
  }
  return result;
}
module.exports = get_union;
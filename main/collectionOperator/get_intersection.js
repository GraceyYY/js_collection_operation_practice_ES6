'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(item => {
    return collection_a.includes(item);
  })
}

module.exports = get_intersection;

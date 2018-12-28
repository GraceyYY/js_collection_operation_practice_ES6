'use strict';

function double_to_one(collection) {
  return collection.reduce((flatArr, item) => {
    return flatArr.concat(item);
  }, []);
}
module.exports = double_to_one;
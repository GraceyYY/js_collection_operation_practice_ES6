function create_updated_collection(collection_a, object_b) {
  let objA = countWords(collection_a);
  let arrB = object_b.value;
  return Object.keys(objA).map(item => {
    if (arrB.includes(item)) {
      objA[item] = objA[item] >= 3 ? objA[item] - Math.floor(objA[item] / 3) : item.count;
    }
    return {
      key: item,
      count: objA[item]
    };
  })
}

function countWords(collection) {
  let count = {};
  collection.forEach(item => {
    count[item] = count[item] ? count[item] + 1 : 1;
  });
  return count;
}
module.exports = create_updated_collection;
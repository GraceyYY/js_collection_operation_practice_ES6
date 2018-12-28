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
  });
}
const NUM = /[0-9]+/g;
const LETTER = /[a-zA-Z]+/g;

function countWords(collection) {
  let tmp = {};
  collection.forEach(item => {
    let key = item.match(LETTER)[0];
    let count = item.match(NUM) ? item.match(NUM)[0] : 1;
    tmp[key] = tmp[key] ? tmp[key] + count : count;
  })
  return tmp;
}
module.exports = create_updated_collection;
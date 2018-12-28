function create_updated_collection(collection_a, object_b) {
  let arrB = object_b.value;
  return collection_a.map(item => {
    if (arrB.includes(item.key)) {
      item.count = item.count >= 3 ? item.count - Math.floor(item.count / 3) : item.count;
    }
    return item;
  });
}
module.exports = create_updated_collection;
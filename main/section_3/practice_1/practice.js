function create_updated_collection(collection_a, object_b) {
  let arrB = object_b.value;
  return collection_a.map(item => {
    if(arrB.includes(item.key)){
        item.count -= 1;
    }
    return item;
  });
}
module.exports = create_updated_collection;
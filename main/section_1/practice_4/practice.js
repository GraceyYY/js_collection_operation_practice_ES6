function collect_same_elements(collection_a, object_b) {
  let arrA = collection_a.map(item => item.key);
  let arrB = object_b.value;
  return arrA.filter(item => {
    return arrB.includes(item);
  });
}
module.exports = collect_same_elements;
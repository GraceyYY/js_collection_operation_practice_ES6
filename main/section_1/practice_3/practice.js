function collect_same_elements(collection_a, object_b) {
  let arr = object_b.value;
  return collection_a.filter(item => {
    return arr.includes(item);
  });
}
module.exports = collect_same_elements;
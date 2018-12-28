function collect_same_elements(collection_a, collection_b) {
  let arr = collection_b.reduce((flat, item) => {
    return flat.concat(item);
  }, []);
  return collection_a.filter(item => {
    return arr.includes(item);
  });
}
module.exports = collect_same_elements;
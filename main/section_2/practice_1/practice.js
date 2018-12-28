function count_same_elements(collection) {
  let count = {};
  collection.forEach(item => {
    count[item] = count[item] ? count[item] + 1 : 1;
  });
  return Object.keys(count).map(attr => {
    return {
      key: attr,
      count: count[attr]
    }
  })
}
module.exports = count_same_elements;
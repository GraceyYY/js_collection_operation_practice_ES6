const NUM = /[0-9]+/g;
const LETTER = /[a-zA-Z]+/g;

function count_same_elements(collection) {
  let tmp = {};
  collection.forEach(item => {
    let key = item.match(LETTER);
    let count = item.match(NUM) ? parseInt(item.match(NUM)[0]) : 1;
    tmp[key] = tmp[key] ? tmp[key] + count : count;
  });
  return Object.keys(tmp).map(attr => {
    return {
      name: attr,
      summary: tmp[attr]
    }
  });
}
module.exports = count_same_elements;
/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  
  let a = str.split('-');

  let b = a.map((item, i) => i == 0 ? item : item[0].toUpperCase() + item.slice(1));

  return b.join('');
}
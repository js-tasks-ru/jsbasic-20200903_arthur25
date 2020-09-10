/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let a = !str ? str : str[0].toUpperCase() + str.slice(1);
  return a;
}

/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let a = str.substring(0, maxlength);
    return a.slice(0, -1) + "…";
  }
  return str;
}

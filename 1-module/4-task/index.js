/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let a = str.toLowerCase();

  if (a.includes("1xbet") || a.includes("xxx")) {
    return true;
  }
  return false;
}

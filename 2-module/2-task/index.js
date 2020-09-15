/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (i in obj) {
    if (obj[i] || obj[i] === undefined) {
      return false;
    }
  }

  return true;
}

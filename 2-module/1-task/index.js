/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    if (Number.isInteger(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}

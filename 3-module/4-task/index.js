/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age) {
  let filteredArr = users.filter(function (item) {
    return age >= item.age;
  });

  let arr = filteredArr.map(function (item) {
    return item.name + ", " + item.balance;
  });

  return arr.join("\n");
}

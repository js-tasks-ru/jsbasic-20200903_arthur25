/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");

    let tbody = document.createElement("tbody");

    this.elem.appendChild(tbody);

    rows.forEach(function (item) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");

      Object.values(item).forEach(function (userDate) {
        let line = document.createElement("td");
        let textNode = document.createTextNode(userDate);

        line.appendChild(textNode);
        tr.appendChild(line);
      });

      td.innerHTML = "<button data-close='true'>X</button>";
      tr.appendChild(td);
      tbody.appendChild(tr);
    });

    this.elem.addEventListener("click", function (evt) {
      let tr = evt.target.parentNode;
      if (evt.target.dataset.close === "true") {
        tr.parentNode.remove();
      }
    });
  }
}

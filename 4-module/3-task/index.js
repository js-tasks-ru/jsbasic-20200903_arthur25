/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let gender = table.rows[i].cells[2].innerHTML === "m";
    let age = table.rows[i].cells[1].innerHTML < 18;
    let availableClass = table.rows[i].cells[3].dataset.available === "true";
    let availableAttr =
      table.rows[i].cells[3].hasAttribute("data-available") == false;

    if (gender) {
      table.rows[i].classList.add("male");
    } else {
      table.rows[i].classList.add("female");
    }

    if (age) {
      table.rows[i].style.textDecoration = "line-through";
    } else {
      false;
    }

    if (availableClass) {
      table.rows[i].classList.add("available");
    } else {
      table.rows[i].classList.add("unavailable");
    }

    if (availableAttr) {
      table.rows[i].setAttribute("hidden", true);
    } else {
      false;
    }
  }

  return table;
}

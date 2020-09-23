/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let tr of table.rows) {
    tr.cells[tr.rowIndex].style.backgroundColor = "red";
  }
}

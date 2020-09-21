/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let result = {
    min: undefined,
    max: undefined,
  };

  let numberArr = str.match(/(-?\d+(\.\d+)?)/g);

  numberArr.map(function (item) {
    Number(item);
  });

  result.max = Math.max(...numberArr);
  result.min = Math.min(...numberArr);

  return result;
}

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

function filterRange(arr, a, b) {
  let m = arr.filter( item => (item >= a && item <= b) || (item <= a && item >= b));

  return m;
}

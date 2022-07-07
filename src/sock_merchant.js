/**
 * This function returns how many pairs are in a given array.
 * @param {number} n
 * @param {number[]} ar
 * @returns {number}  The amount of detected pairs  in the array.
 */
export function sock_merchant(n, ar) {
  let dict = {};
  let pairs = 0;
  ar.forEach((element) => {
    if (dict[element] === undefined) dict[element] = 1;
    else dict[element]++;
  });
  for (let sock in dict) {
    pairs += Math.floor(dict[sock] / 2);
  }
  return pairs;
}

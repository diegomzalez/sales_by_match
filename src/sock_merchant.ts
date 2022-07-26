/**
 * This function returns how many pairs are in a given array.
 * @param {number} n
 * @param {number[]} ar
 * @returns {number}  The amount of detected pairs  in the array.
 */
export function sock_merchant(n: number, ar: Array<number>): number {
  let dict: { [key: number]: boolean | undefined } = {};
  let pairs = 0;
  ar.forEach((element) => {
    if (dict[element] === undefined) dict[element] = true;
    else {
      dict[element] = undefined;
      pairs++;
    }
  });
  return pairs;
}

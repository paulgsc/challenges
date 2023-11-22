const pairwise = (arr, arg) => {
  const pairs = {};
  for (const [idx, val] of arr.entries()) {
    let residual = arg - val;
    let resIndex = arr.indexOf(residual);
    if (resIndex !== -1) {
      if (typeof pairs[resIndex] === "undefined") {
        pairs[resIndex] = idx;
        continue;
      }
      let left = resIndex + 1;
    }
  }
  return pairs;
};
const arr = [0, 1, 1, 2, 2, 3];
const arg = 3;
/*
[0, 3] (0, 5)
[1, 2] (1, 3), (2, 4)
*/

console.log(pairwise(arr, arg));

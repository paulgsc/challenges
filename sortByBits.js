const sortByBits = (arr) => {
  arr.sort((a, b) => a - b);
  const bits = {};
  for (const e of arr) {
    let count = 0;
    let rem = e;
    while (rem > 0) {
      count++;
      const p = Math.floor(Math.log(rem) / Math.log(2));
      rem -= Math.pow(2, p);
    }
    bits[count] = [...(bits[count] || []), e];
  }
  return Object.entries(bits).reduce((acc, [_, val]) => [...acc, ...val], []);
};

const arr = [1024, 16, 7, 5, 6, 2, 1, 0];
console.log(sortByBits(arr));

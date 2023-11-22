const uniquePaths = (m, n) => {
  const memo = {};
  const memPaths = (m, n) => {
    const key = `${m}_${n}`;
    const keyReversed = key.split("_").reverse().join("_");
    if (memo[key]) return memo[key];
    if (memo[keyReversed]) return memo[keyReversed];
    if (m === 0 || n === 0) return 0;
    if (m === n && m === 1) return 1;
    memo[key] = memPaths(m - 1, n) + memPaths(m, n - 1);
    return memo[key];
  };
  return memPaths(m, n);
};

const m = 23;
const n = 12;
console.log(uniquePaths(m, n));

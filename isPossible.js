const isPossible = (target) => {
  const n = target.length;
  if (n === 1) return target[0] === 1;
  let sum = target.reduce((acc, curr) => curr + acc, 0);
  if (sum === target.length) return true;

  while (sum > target.length) {
    target.sort((a, b) => b - a);
    const contrib = target.slice(1, n).reduce((acc, curr) => curr + acc, 0);
    if (target[0] <= contrib) return false;
    target[0] = contrib > 1 ? target[0] % contrib : 1;
    sum = target[0] + contrib;
  }
  const res = new Set(target);
  return res.size === 1 && res.has(1);
};

const target = [2, 900000002];
console.log(isPossible(target));

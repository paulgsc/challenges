const addRungs = function (rungs, dist) {
  if (rungs.length < 1) return 0;
  let minRungs = 0;
  let left = 0;
  let floor = 0;
  while (left < rungs.length) {
    const rungDist = rungs[left] - floor;

    if (rungDist > dist) {
      console.log(rungDist, "at: ", rungs[left]);
      minRungs += Math.floor(rungDist / dist);
    }
    floor = rungs[left];
    left++;
  }
  return minRungs;
};

const rungs = [1, 3, 5, 10];
const dist = 2;
console.log(addRungs(rungs, dist));

[].forEach(())
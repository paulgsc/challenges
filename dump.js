const getKSubsets = (k, sums) => {
  sums.sort((a, b) => a - b);
  const uniqueSums = new Set(sums);
  const result = [];
  let isValid = false;

  const backtrace = (subset, start) => {
    if (isValid) return;

    const subSum = subset.reduce((acc, curr) => acc + curr, 0);
    if (!uniqueSums.has(subSum)) return;

    if (subset.length === k) {
      const subArrSet = new Set();

      const subsetsSum = (ksubset, start) => {
        const subSum = ksubset.reduce((acc, curr) => acc + curr, 0);

        if (uniqueSums.has(subSum) && !subArrSet.has(subSum))
          subArrSet.add(subSum);

        for (let i = start; i < k; i++) {
          ksubset.push(subset[i]);
          subsetsSum(ksubset, i + 1);
          ksubset.pop();
        }
      };
      subsetsSum([], 0);
      if ([...uniqueSums].length === [...subArrSet].length) {
        result.push(...subset);
        isValid = true;
      }
    }
    for (let i = start; i < sums.length; i++) {
      subset.push(sums[i]);
      if (subset.length <= k) backtrace(subset, i + 1);
      subset.pop();
    }
  };
  backtrace([], 0);
  return result;
};

const sums = [0, 0, 0, 0];
console.log(getKSubsets(2, sums));

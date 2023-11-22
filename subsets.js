const subsetWithDup = (nums) => {
  nums.sort();
  const result = [];

  const backtrace = (subset, start) => {
    result.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      const find = result.some(
        (subArr) =>
          subArr.length === subset.length &&
          subArr.every((element, index) => element === subset[index])
      );
      if (!find) backtrace(subset, i + 1);
      subset.pop();
    }
  };
  backtrace([], 0);
  return result;
};

const nums = [4, 4, 4, 1, 4];
console.log(subsetWithDup(nums));

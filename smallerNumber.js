const smallerNumbersThanCurrent = (nums) => {
  return nums.map((num) =>
    nums.reduce((acc, curr) => (num > curr ? ++acc : acc), 0)
  );
};
const nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums));

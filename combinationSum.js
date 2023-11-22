const combinationSum = (candidates, target) => {
  const output = [];

  const permute = (residual) => {
    if (residual === 0) return [];
    if (residual < 0) return null;
    for (const num of candiates) {
      console.log("num: ", num, "res: ", residual);
      const result = permute(residual - num);
      console.log("result: ", result, "res: ", residual, "num: ", num);
      if (!!result) return [...result, num];
    }
    console.log("this ran", "res: ", residual);
  };
  permute(target);
  return output;
};

const candiates = [2];
const target = 7;
console.log(combinationSum(candiates, target));

const snail = (array) => {
  if (!Array.isArray(array)) return [];
  const result = [];
  const n = array.length;
  let left = 0;
  let right = array[0].length - 1;
  let top = 0;
  let bottom = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }
  return result;
};

const array = [[]];
console.log(snail(array));

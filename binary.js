function findSmallestMissingInteger(array) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] === mid) {
      low = mid + 1;
    } else if (array[mid] < mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

const array = [0, 1, 2, 3, 4, 5, 6];
console.log(findSmallestMissingInteger(array));

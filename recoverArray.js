function recoverUnknownArray(n, sums) {
  const subsetSumFreq = new Map();

  // Step 2: Count the frequency of each subset sum
  for (const sum of sums) {
    subsetSumFreq.set(sum, (subsetSumFreq.get(sum) || 0) + 1);
  }

  const ans = [];

  // Step 4: Sort the subset sums
  sums.sort((a, b) => a - b);

  // Step 5: Recover the unknown array
  for (const sum of sums) {
    if (subsetSumFreq.get(sum) > 0) {
      ans.push(sum);

      // Subtract the current element from all possible differences
      for (let i = 0; i < ans.length - 1; i++) {
        const diff = ans[i] + sum;
        if (subsetSumFreq.get(diff) > 0) {
          subsetSumFreq.set(diff, subsetSumFreq.get(diff) - 1);
        }
      }

      // Remove the used subset sum
      subsetSumFreq.set(sum, subsetSumFreq.get(sum) - 1);
    }

    // Step 6: Stop when we have recovered n elements
    if (ans.length === n) {
      break;
    }
  }

  return ans;
}

// Example usage:
const n = 3;
const sums = [1, 2, 3, 4, 5, 6];
const recoveredArray = recoverUnknownArray(n, sums);
console.log(recoveredArray);

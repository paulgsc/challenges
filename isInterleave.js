function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  // Initialize a 2D array to store intermediate results
  const dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(false)
  );

  // Base case: empty strings interleave to form an empty string
  dp[0][0] = true;

  // Check for the first row
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // Check for the first column
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // Fill in the rest of the dp array
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      // Check if the current position can be reached from the left or above
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  // // The bottom-right cell represents the entire interleaving
  // return dp[s1.length][s2.length];
}

// Example usage:
const s1 = "aabcc";
const s2 = "dbbca";
const s3 = "aadbbcbcac";

console.log(isInterleave(s1, s2, s3)); // Output: true

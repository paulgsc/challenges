const Modulo = 1000000007;

function calculateProbability(N, L, R) {
  const dp = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + ((dp[i - 1][j] * j) % Modulo)) % Modulo;
    }
  }

  let result = 0;
  for (let X = L; X <= R; X++) {
    result = (result + dp[N][X]) % Modulo;
  }

  return result;
}

// Example usage:
const N = 5;
const L = 2;
const R = 4;
const result = calculateProbability(N, L, R);
console.log(result);

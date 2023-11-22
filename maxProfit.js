function maxProfit(k, prices) {
  const buy = new Array(k + 1).fill(Infinity);
  const profit = new Array(k + 1).fill(0);
  for (let price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.min(buy[i], price - profit[i - 1]);
      profit[i] = Math.max(profit[i], price - buy[i]);
    }
    console.log(buy, profit);
  }

  return;
}

// Example usage:
const k = 4;
const prices = [3, 2, 6, 5, 0, 3];
const result = maxProfit(k, prices);
console.log(result);

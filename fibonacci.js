const fib = (n) => {
  const memo = {};
  const fibMemo = (n) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
  };
  return fibMemo(n);
};

/*
n = 5
4, 3
3, 2
*/
const n = 8;
console.log(fib(n));

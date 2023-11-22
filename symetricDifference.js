const sym = (...args) => {
  const difference = (...params) => {
    const sets = []
      .concat(
        ...params
          .slice(0, Math.min(2, params.length))
          .map((param) => [...new Set(param)])
      )
      .sort((a, b) => a - b);

    const diff = sets.reduce(
      (acc, curr, i, arr) =>
        arr[i - 1] === curr || arr[i + 1] === curr ? acc : [...acc, curr],
      []
    );
    if (params.length === 2) return diff;
    return difference(diff, ...params.slice(2, params.length));
  };

  return difference(...args);
};

console.log(sym([1, 2, 3], [2, 3, 4], [2, 3]));

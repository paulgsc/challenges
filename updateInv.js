const updateInventory = (arr1, arr2) => {
  const currItems = arr1.reduce(
    (acc, [_, key], i) => ({
      ...acc,
      [key]: i,
    }),
    {}
  );
  for (const [val, key] of arr2) {
    if (currItems[key] !== undefined) {
      const index = currItems[key];
      arr1[index][0] += val;
    } else {
      arr1.push([val, key]);
    }
  }
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
};
console.log(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ]
  )
);

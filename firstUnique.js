const firstUniqChar = function (s) {
  const len = s.length;
  if (len < 1) return -1;
  const uniqueChars = [...new Set([...s])];

  const freq = uniqueChars.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: 0,
    }),
    {}
  );
  let left = 0;
  while (left < len) {
    let i = left;
    while (i < len && freq[s[left]] < 2) {
      if (s[left] === s[i]) freq[s[i]] += 1;
      i++;
    }
    if (freq[s[left]] === 1) return left;
    left++;
  }
  return -1;
};

const s = "loveleetcode";
console.log(firstUniqChar(s));

const permAlone = (str) => {
  const hasRepeats = (str) => /(.)\1+/i.test(str);
  let count = 0;
  const res = [];
  const permute = (substring, range) => {
    if (substring.length === str.length) !hasRepeats(substring) && count++;
    for (let i = 0; i < str.length; i++) {
      if (range.includes(i)) continue;
      if (!hasRepeats(substring)) {
        range.push(i);
        permute(substring + str[i], range);
        range.pop();
      }
    }
  };
  permute("", []);
  return count;
};

const str = "abc";
console.log(permAlone(str));

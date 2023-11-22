const numberOfSubstrings = (s) => {
  let count = 0;
  const n = s.length;
  const isValidSubstring = (substring) =>
    Math.min(
      substring.indexOf("a"),
      substring.indexOf("b"),
      substring.indexOf("c")
    ) !== -1;
  for (let i = 0; i + 2 < n; i++) {
    const substring = s.slice(i, n);
    if (!isValidSubstring(substring)) continue;
    const idx = Math.max(
      substring.indexOf("a"),
      substring.indexOf("b"),
      substring.indexOf("c")
    );
    count += substring.length - idx;
  }

  return count;
};
const s = "ababbbc";
console.log(numberOfSubstrings(s));

const longestPalindrome = function (s) {
  let result = "";
  isPalindromic = (str) => {
    return str === str.split("").reverse().join("");
  };
  const permute = (subset, start) => {
    if (subset.length > 0) {
      if (subset.length > result.length) result = subset;
    }
    for (let i = start; i < s.length; i++) {
      const substring = s.slice(start, i + 1);
      if (substring.length <= result) continue;
      if (isPalindromic(substring)) permute(substring, i + 1);
    }
  };
  permute("", 0);
  return result;
};
const str = "babad";

console.log(longestPalindrome(str));

/*
str give as array like index property

for each e in str
push e in a result array

assuming general str then we can recursively call this fn -> push e initializing it with a slice of the str upto entire str.

we know we are working with binary str, so we need to make it more performant given this info.

1001



*/

const numberOfUniqueGoodSubsequences = (binary) => {
  if (typeof binary !== "string" || binary.length < 1) return 0;
  const goodSubsequences = new Set();
  const enforceRuleRegex = /^(?=0\d)/;
  const genereateSequences = (start, sequence) => {
    for (let i = start; i < binary.length; i++) {
      const nextSequence = sequence + binary[i];
      if (enforceRuleRegex.test(nextSequence)) return;
      if (goodSubsequences.has(nextSequence)) continue;
      goodSubsequences.add(sequence + binary[i]);
      genereateSequences(i + 1, sequence + binary[i]);
    }
  };
  genereateSequences(0, "");
  return goodSubsequences.size;
};

const binary = "111001101100000001001110110101110001100";

console.log(numberOfUniqueGoodSubsequences(binary));

function permutations(string) {
  const result = [];

  function generatePermutations(current, addedIndex) {
    if (current.length === string.length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < string.length; i++) {
      if (!addedIndex.includes(i)) {
        addedIndex.push(i);
        generatePermutations(current + string[i], addedIndex);
        addedIndex.pop();
      }
    }
  }

  generatePermutations("", []);

  // Remove duplicates by converting the array to a Set and back to an array
  return [...new Set(result)];
}

const inputString = "aabb";
const allPermutations = permutations(inputString);
console.log(allPermutations);

const canBeTypedWords = function (text, brokenLetters) {
  if (text.length < 1) return text.length;
  const words = [...new Set(text.split(" "))];
  let count = 0;
  for (const word of words) {
    for (const index in brokenLetters) {
      console.log(
        "letter: ",
        brokenLetters[index],
        "word: ",
        word,
        "count: ",
        count
      );
      if (word.indexOf(brokenLetters[index]) > -1) {
        count++;
        break;
      }
    }
    console.log("count: ", count);
  }

  return words.length - count;
};

const text = "hello world";
const brokenLetters = "o";
console.log(canBeTypedWords(text, brokenLetters));

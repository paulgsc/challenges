/*
r--
-r-
--r

poll 0:
-r-- => r---
poll 1:
r--- => -r--
poll 2:
-r-- => r---
poll 3:
r--- => -r--
poll 0:
-r-- => --r-
poll 0:










r---
--r-
---r



*/

const rabbit = (n, currentPosition) => {
  if (currentPosition === n) return --n;
  if (currentPosition === 1) return ++currentPosition;

  return Math.random() > 0.5 ? currentPosition + 1 : currentPosition - 1;
};

const findTheRabbit = (n) => {
  let currentPosition = Math.max(1, Math.floor(n * Math.random()));
  let guesses = 0;
  let found = false;
  let finalGuess = 0;
  while (!found) {
    for (let i = 1; i <= n; i++) {
      guesses++;
      console.log([currentPosition, i, guesses]);
      if (i === currentPosition) {
        found = true;
        finalGuess = i;
        return [found, currentPosition, finalGuess, guesses];
      }
      currentPosition = rabbit(n, currentPosition);
    }
    if (found) break;
    let guess = 1;
    if (guess === currentPosition) {
      guesses++;
      found = true;
      break;
    }
    currentPosition = rabbit(n, currentPosition);
  }
  return found;
};

console.log(findTheRabbit(100));

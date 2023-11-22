const closestDivisors = (num) => {
  const num1 = num + 1;
  const num2 = num + 2;
  let num1Div;
  let num2Div;
  let i = Math.floor(Math.sqrt(num2));
  while (i > 0) {
    if (num2 % i === 0) {
      num2Div = i;
      break;
    }
    i--;
  }
  i = Math.floor(Math.sqrt(num1));
  while (i > 0) {
    if (num1 % i === 0) {
      num1Div = i;
      break;
    }
    i--;
  }
  const s1 = Math.abs(num1Div - num1 / num1Div);
  const s2 = Math.abs(num2Div - num2 / num2Div);
  return s1 > s2 ? [num2Div, num2 / num2Div] : [num1Div, num1 / num1Div];
};

const num = 8;
console.log(closestDivisors(num));

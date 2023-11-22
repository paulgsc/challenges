var largestMultipleOfThree = function (digits) {
  // Calculate the sum of all digits
  let sum = digits.reduce((acc, cur) => acc + cur, 0);

  // Sort the digits in descending order
  digits.sort((a, b) => b - a);

  // Check the remainder when dividing the sum by 3
  let remainder = sum % 3;

  // Create arrays to store digits with remainders 1 and 2
  let remainder1 = [];
  let remainder2 = [];

  for (const digit of digits) {
    if (digit % 3 === 1) {
      remainder1.push(digit);
    } else if (digit % 3 === 2) {
      remainder2.push(digit);
    }
  }

  // Sort the remainder1 and remainder2 arrays
  remainder1.sort((a, b) => a - b);
  remainder2.sort((a, b) => a - b);

  if (remainder === 1) {
    // If the remainder is 1, we can remove one digit with remainder 1 or two digits with remainder 2
    if (remainder1.length > 0) {
      digits.splice(digits.indexOf(remainder1[0]), 1);
    } else {
      digits.splice(digits.indexOf(remainder2[0]), 1);
      digits.splice(digits.indexOf(remainder2[1]), 1);
    }
  } else if (remainder === 2) {
    // If the remainder is 2, we can remove one digit with remainder 2 or two digits with remainder 1
    if (remainder2.length > 0) {
      digits.splice(digits.indexOf(remainder2[0]), 1);
    } else {
      digits.splice(digits.indexOf(remainder1[0]), 1);
      digits.splice(digits.indexOf(remainder1[1]), 1);
    }
  }

  // Remove leading zeros and convert the result to a string
  while (digits[0] === 0 && digits.length > 1) {
    digits.shift();
  }

  return digits.length === 0 ? "0" : digits.join("");
};

// Example usage:
const digits = [8, 1, 9];
const result = largestMultipleOfThree(digits);
console.log(result); // Output: "981"

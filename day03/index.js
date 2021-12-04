const { data } = require("./data.js");

// PART ONE:

/*
- Iterate through data 
- Calculate gamma:
    - Iterate through numbers 
    - Have obj that tracks digits 
    - Each time there's a 1, tick up count 
    - At end, compare obj.values - if total > half of data.length, 1 and > half, 1 to make digits of gamma
- Calculate epsilon by taking each digit of gamma and creating a new number with each digit opposite (0 becomes 1 and vice versa)
- Convert epsilon and gamma from binary to regular numbers 
    - Split binary into digits and reverse
    - Loop thru reversed digits
    - At each digit, multiply the digit by 2 to power of i, and add product to decimal
    - Return decimal
- Return epsilon*gamma
*/

function calculatePowerConsumption(numbers) {
  const gamma = calculateGamma(numbers);
  const epsilon = calculateEpsilon(gamma);
  return convertBinary(gamma) * convertBinary(epsilon);
}

function calculateGamma(numbers) {
  let totalDigits = numbers[0].length;
  let initialReduceValue = [];
  while (totalDigits > 0) {
    initialReduceValue = { ...initialReduceValue, [totalDigits]: 0 };
    totalDigits -= 1;
  }

  const onesCounts = numbers.reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] == 1) {
        acc = { ...acc, [i + 1]: acc[i + 1] + 1 };
      }
    }
    return acc;
  }, initialReduceValue);

  const gammaDigits = [];
  for (const count in onesCounts) {
    onesCounts[count] >= numbers.length / 2
      ? gammaDigits.push(1)
      : gammaDigits.push(0);
  }
  return gammaDigits.join("");
}

function calculateEpsilon(gamma) {
  return gamma
    .split("")
    .map((digit) => (digit == 1 ? 0 : 1))
    .join("");
}

function convertBinary(binary) {
  const reverseDigits = binary.split("").reverse();
  return reverseDigits.reduce((acc, cur, i) => {
    return cur * 2 ** i + acc;
  }, 0);
}

// console.log("answer: ", calculatePowerConsumption(data));

// PART TWO:

/*
- 
*/

module.exports = {
  calculatePowerConsumption,
  calculateGamma,
  calculateEpsilon,
  convertBinary,
};

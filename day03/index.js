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
    - 
- Return epsilon*gamma
*/

function calculatePowerConsumption(numbers) {
  const gamma = convertBinary(calculateGamma(numbers));
  const epsilon = convertBinary(calculateEpsilon(gamma));
  return gamma * epsilon;
}

function calculateGamma(numbers) {
  const onesCounts = numbers.reduce(
    (acc, cur) => {
      for (let i = 0; i < cur.length; i++) {
        if (cur[i] == 1) {
          acc = { ...acc, [i + 1]: acc[i + 1] + 1 };
        }
      }
      return acc;
    },
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }
  );

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

function convertBinary(binaryNumber) {}

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

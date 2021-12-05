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
  const onesCounts = countBits(numbers, 1);

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

// console.log("answer: ", calculatePowerConsumption(data));

// PART TWO:

/*
- oxygen:
- Use helper fns above to create digit count object
- Filter array accordingly for each digit place 
- Keep only numbers with most common bit in each digit place
- co2:
- Use helper fns above to create digit count object
- Filter array accordingly for each digit place 
- Keep only numbers with least common bit in each digit place
*/

function calculateLifeSupport(numbers) {
  const oxygen = calculateOxygen(numbers);
  const co2 = calculateCo2(numbers);
  return convertBinary(oxygen) * convertBinary(co2);
}

function calculateOxygen(numbers) {
  const onesCounts = countBits(numbers, 1);
  console.log(onesCounts);
}

function calculateCo2(numbers) {}

// HELPER FUNCTIONS:

//Counts the frequency of either 0 or 1 bit in each digit place in an array of binaries and returns obj with numbered keys and totals for each digit:
function countBits(numbers, bitToCount) {
  return numbers.reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] == bitToCount) {
        acc = { ...acc, [i + 1]: acc[i + 1] + 1 };
      }
    }
    return acc;
  }, createDigitsCountObject(numbers[0]));
}

//Creates an object with numbered keys for each digit place (and initial values of 0):
function createDigitsCountObject(number) {
  let totalDigits = number.length;
  let initialReduceValue = [];
  while (totalDigits > 0) {
    initialReduceValue = { ...initialReduceValue, [totalDigits]: 0 };
    totalDigits -= 1;
  }
  return initialReduceValue;
}

//Converts binary to decimal:
function convertBinary(binary) {
  const reverseDigits = binary.split("").reverse();
  return reverseDigits.reduce((acc, cur, i) => {
    return cur * 2 ** i + acc;
  }, 0);
}

module.exports = {
  calculatePowerConsumption,
  calculateGamma,
  calculateEpsilon,
  convertBinary,
  calculateOxygen,
  calculateCo2,
  calculateLifeSupport,
};

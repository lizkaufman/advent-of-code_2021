const { test, expect } = require("@jest/globals");
const { example } = require("../day03/data");
const {
  calculatePowerConsumption,
  calculateGamma,
  calculateEpsilon,
  convertBinary,
  calculateOxygen,
  calculateCo2,
  calculateLifeSupport,
} = require("../day03/index");

// PART ONE:

test("calculatePowerConsumption with example data returns 198", () => {
  const expected = 198;
  const actual = calculatePowerConsumption(example);
  expect(actual).toBe(expected);
});

test("calculateGamma with example returns 10110", () => {
  const expected = "10110";
  const actual = calculateGamma(example);
  expect(actual).toBe(expected);
});

test("calculateEpsilon with gamma of 10110 returns 01001", () => {
  const expected = "01001";
  const actual = calculateEpsilon("10110");
  expect(actual).toBe(expected);
});

test("convertBinary converts 10110 to 22", () => {
  const expected = 22;
  const actual = convertBinary("10110");
  expect(actual).toBe(expected);
});

test("convertBinary converts 01001 to 9", () => {
  const expected = 9;
  const actual = convertBinary("01001");
  expect(actual).toBe(expected);
});

//PART TWO:

test("calculateLifeSupport with example data returns 230", () => {
  const expected = 230;
  const actual = calculateLifeSupport(example);
  expect(actual).toBe(expected);
});

test("calculateOxygen with example data returns 10111", () => {
  const expected = "10111";
  const actual = calculateOxygen(example);
  expect(actual).toBe(expected);
});

test.only("calculateCo2 with example data returns 01010", () => {
  const expected = "01010";
  const actual = calculateCo2(example);
  expect(actual).toBe(expected);
});

test("", () => {});

test("", () => {});

test("", () => {});

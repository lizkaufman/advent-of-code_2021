const { test, expect } = require("@jest/globals");
const { example } = require("../01/data");
const {
  countDepthIncrease,
  countSlidingWIndowDepthIncrease,
} = require("../01/index");

test("When run with example data, countDepthIncreases should return 7", () => {
  const expected = 7;
  const actual = countDepthIncrease(example);
  expect(actual).toBe(expected);
});

test("When run with example data, countSlidingWIndowDepthIncrease should return 5", () => {
  const expected = 5;
  const actual = countSlidingWIndowDepthIncrease(example);
  expect(actual).toBe(expected);
});

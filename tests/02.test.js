const { test, expect } = require("@jest/globals");
const { example } = require("../day02/data.js");
const { pilotSub, pilotSubAim } = require("../day02/index.js");

test("When called w/ example data, pilotSub should return 150", () => {
  const expected = 150;
  const actual = pilotSub(example);
  expect(actual).toBe(expected);
});

test("When called w/ example data, pilotSubAim should return 900", () => {
  const expected = 900;
  const actual = pilotSubAim(example);
  expect(actual).toBe(expected);
});

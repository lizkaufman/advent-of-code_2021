const { test, expect } = require("@jest/globals");
const { example } = require("../day02/data.js");
const { pilotSub } = require("../day02/index.js");

test("When called w/ example data, pilotSub should return 150", () => {
  const expected = 150;
  const actual = pilotSub(example);
  expect(actual).toBe(expected);
});

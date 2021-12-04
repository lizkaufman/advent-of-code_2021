const { data } = require("./data");

// PART ONE:

/*
- Iterate through array
- Compare each measurement to previous 
- If measurement > previous, count as an increase (else do nothing)
- Return number of increases
*/

function countDepthIncrease(measurementsList) {
  let totalDepthIncreases = 0;
  for (let i = 0; i < measurementsList.length; i++) {
    if (measurementsList[i] > measurementsList[i - 1]) {
      totalDepthIncreases += 1;
    }
  }
  return totalDepthIncreases;
}

const partOneAnswer = countDepthIncrease(data);
console.log(partOneAnswer);

// PART TWO:

/*
- Iterate through array
- For each measurement, calculate sum of it + next two as window1 and sum of next three as window 2 
- If window2 > window1, count as an increase (else do nothing)
- Return number of increases
*/

function countSlidingWIndowDepthIncrease(measurementsList) {
  let totalDepthIncreases = 0;
  for (let i = 0; i < measurementsList.length; i++) {
    const window1 =
      measurementsList[i] + measurementsList[i + 1] + measurementsList[i + 2];
    const window2 =
      measurementsList[i + 1] +
      measurementsList[i + 2] +
      measurementsList[i + 3];
    if (window2 > window1) {
      totalDepthIncreases += 1;
    }
  }
  return totalDepthIncreases;
}

const partTwoAnswer = countSlidingWIndowDepthIncrease(data);
console.log(partTwoAnswer);

module.exports = { countDepthIncrease, countSlidingWIndowDepthIncrease };

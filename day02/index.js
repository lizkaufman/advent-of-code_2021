const { data } = require("./data");

// PART ONE:

/*
- Iterate thru array
- Get data out of string (direction and distance)
- Adjust position key's value accordingly
    - forward = increase horizontal 
    - down = increase depth
    - up = decrease depth
- Multiply horizontal * depth values of position for final answer
*/

function pilotSub(commands) {
  const finalPosition = commands.reduce(
    (acc, cur) => {
      const direction = cur.charAt(0);
      const distance = Number(cur.split(" ")[1]);
      switch (direction) {
        case "f":
          return { ...acc, horizontal: acc.horizontal + distance };
        case "d":
          return { ...acc, depth: acc.depth + distance };
        case "u":
          return { ...acc, depth: acc.depth - distance };
        default:
          return acc;
      }
    },
    { horizontal: 0, depth: 0 }
  );
  return finalPosition.horizontal * finalPosition.depth;
}

console.log(pilotSub(data));

// const partOneAnswer = pilotSub(data);
// console.log({ partOneAnswer });

// PART TWO:

/*
- 
*/

// const partTwoAnswer = ;
// console.log({ partTwoAnswer });

module.exports = { pilotSub };

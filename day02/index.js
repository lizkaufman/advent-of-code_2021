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

// console.log(pilotSub(data));

// PART TWO:

/*
- down = increase aim by number
- up = decrease aim by number
- forward = increase horizontal by number AND increase depth by aim * number
*/

function pilotSubAim(commands) {
  const finalPosition = commands.reduce(
    (acc, cur) => {
      const direction = cur.charAt(0);
      const distance = Number(cur.split(" ")[1]);
      switch (direction) {
        case "d":
          return { ...acc, aim: acc.aim + distance };
        case "u":
          return { ...acc, aim: acc.aim - distance };
        case "f":
          return {
            ...acc,
            horizontal: acc.horizontal + distance,
            depth: acc.depth + acc.aim * distance,
          };
        default:
          return acc;
      }
    },
    { horizontal: 0, depth: 0, aim: 0 }
  );
  return finalPosition.horizontal * finalPosition.depth;
}

// console.log(pilotSubAim(data));

module.exports = { pilotSub, pilotSubAim };

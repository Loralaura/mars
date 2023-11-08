export function newRover(posAndOriet: string) {
  return {
    x: Number(posAndOriet[0]),
    y: Number(posAndOriet[2]),
    orientation: posAndOriet[4],
  };
}

export function L(rover: { x: number; y: number; orientation: string }) {
  let thisRover = rover;

  switch (rover.orientation) {
    case "N":
      thisRover.orientation = "W";
      break;
    case "S":
      thisRover.orientation = "E";
      break;
    case "E":
      thisRover.orientation = "N";
      break;
    case "W":
      thisRover.orientation = "S";
      break;
  }
  return thisRover;
}

export function R(rover: { x: number; y: number; orientation: string }) {
  let thisRover = rover;

  switch (rover.orientation) {
    case "N":
      thisRover.orientation = "E";
      break;
    case "S":
      thisRover.orientation = "W";
      break;
    case "E":
      thisRover.orientation = "S";
      break;
    case "W":
      thisRover.orientation = "N";
      break;
  }
  return thisRover;
}

export function M(
  rover: { x: number; y: number; orientation: string },
  plateau: Array<number>
) {
  let thisRover = { ...rover };

  switch (thisRover.orientation) {
    case "E":
      if (thisRover.x < plateau[0]) {
        thisRover.x += 1;
      }
      break;
    case "W":
      if (thisRover.x > 0) {
        thisRover.x -= 1;
      }
      break;
    case "N":
      console.log(thisRover.y, plateau[1]);
      if (thisRover.y < plateau[1]) {
        thisRover.y += 1;

        console.log("HIT2");
      }
      break;
    case "S":
      if (thisRover.y > 0) {
        thisRover.y -= 1;
      }
      break;
  }
  console.log(thisRover);
  return thisRover;
}

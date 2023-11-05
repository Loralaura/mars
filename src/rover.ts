export function readInstructions() {}

export function initPlateau(size: string) {
  return [Number(size[0]), Number(size[2])];
}

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

export function M(rover: Object, plataeu: Array<Number>) {
  /*
        let thisRover = rover;
 switch (rover.orientation) {
   case "N":
     thisRover.x += 1;
   case "S":
    thisRover.x -= 1;
   case "E":
     thisRover.y += 1;
   case "W":
    thisRover.y -= 1;
 }
 return rover
 */
}

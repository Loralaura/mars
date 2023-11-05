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

export function L(rover: Object) {}

export function R(rover: Object) {}

export function M(rover: Object, plataeu: Array<Number>) {}

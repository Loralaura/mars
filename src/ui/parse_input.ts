import { Orientation, ORIENTATION, Move, MOVE } from "../instructions.types";

export function parseInstruction(input: string): Array<string> | undefined {
  let instruction = input.split(" ").join("");

  const isMove = (x: any): x is Move => MOVE.includes(x);
  const isOrientation = (x: any): x is Orientation => ORIENTATION.includes(x);

  if (
    typeof parseInt(instruction[0]) === "number" &&
    typeof parseInt(instruction[1]) === "number" &&
    isOrientation(instruction[2])
  ) {
    return ["r", instruction];
  }

  for (let i = 0; i < instruction.length; i++) {
    if (!isMove(instruction[0])) {
      return undefined;
    }
  }

  return ["m", instruction];
}

export function parseSizeInput(input: string): Array<number> | undefined {
  const plateauSizeX = parseInt(input[0]);
  const plateauSizeY = parseInt(input[2]);

  if (isNaN(plateauSizeX) || isNaN(plateauSizeY)) {
    return undefined;
  }

  if (plateauSizeX < 1 || plateauSizeY < 1) {
    return undefined;
  }

  return [plateauSizeX, plateauSizeY];
}

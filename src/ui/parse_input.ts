import { Orientation, ORIENTATION, Move, MOVE } from "../instructions.types";

export function parseRover(input: string): string | undefined {
  let instruction = input;

  const isOrientation = (x: any): x is Orientation => ORIENTATION.includes(x);

  if (instruction.toLowerCase() === "end") {
    return "end";
  }

  if (
    typeof parseInt(instruction[0]) === "number" &&
    typeof parseInt(instruction[2]) === "number" &&
    isOrientation(instruction[4].toUpperCase())
  ) {
    return instruction.toUpperCase();
  }

  console.log(instruction);
  return undefined;
}

export function parseInstruction(input: string): string | undefined {
  let instruction = input.split(" ").join("").toUpperCase();

  const isMove = (x: any): x is Move => MOVE.includes(x);

  for (let i = 0; i < instruction.length; i++) {
    if (!isMove(instruction[i])) {
      return undefined;
    }
  }

  return instruction;
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

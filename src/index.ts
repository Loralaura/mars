import { clear, print, askQuestion } from "./ui/console";
import { parseSizeInput, parseInstruction, parseRover } from "./ui/parse_input";
import { newRover, L, R, M } from "./instructions";

let rovers: Array<{ x: number; y: number; orientation: string }> = [];
let plateau: Array<number> = [];

export default function launch() {
  askQuestion("Please specify plateau size (eg 5 5)", chooseSize);
}

function chooseSize(input: string): void {
  const plateauSize = parseSizeInput(input);

  if (plateauSize === undefined) {
    print(`${input} is an invalid input, try again.`);
    return launch();
  }
  plateau = plateauSize;
  return askForRover();
}

function askForRover() {
  askQuestion(
    `Please choose where to place a rover and which direction to face(Eg. 1 5 N) or type "end" to print results`,
    placeRover
  );
}

function placeRover(input: string): void {
  const rover = parseRover(input);

  if (rover === "end") {
    return end();
  }

  if (rover === undefined) {
    print(`${input} is an invalid input, try again.`);
    return askForRover();
  }
  rovers.push(newRover(rover));
  return askForInstructions();
}

function askForInstructions() {
  askQuestion(
    `Please enter instructions for rover(Eg. MMMLMMRM)  `,
    checkInstructions
  );
}

function checkInstructions(input: string): void {
  const instructions = parseInstruction(input);

  if (instructions === undefined) {
    print(`${input} is an invalid input, try again.`);
    return askForInstructions();
  }
  return runInstructions(instructions);
}

function runInstructions(instructions: string) {
  const instructionsArr = instructions.split("");

  instructionsArr.forEach((instruction) => {
    switch (instruction) {
      case "L":
        rovers[rovers.length - 1] = L(rovers[rovers.length - 1]);
        break;
      case "R":
        rovers[rovers.length - 1] = R(rovers[rovers.length - 1]);
        break;
      case "M":
        console.log(M(rovers[rovers.length - 1], plateau));
        rovers[rovers.length - 1] = M(rovers[rovers.length - 1], plateau);
        console.log(rovers[rovers.length - 1]);
        break;
    }
  });
  return askForRover();
}

function end() {
  print("Printing results...");
  rovers.forEach((rover) => {
    print(`${rover.x} ${rover.y} ${rover.orientation}`);
  });
  print("🚀Thank you for using MarsRover🚀");
}

launch();

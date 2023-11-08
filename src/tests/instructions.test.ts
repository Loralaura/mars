import { newRover, L, R, M } from "../instructions";
import readInstructions from "..";
import {
  parseInstruction,
  parseSizeInput,
  parseRover,
} from "../ui/parse_input";

describe("make plateau", () => {
  it("should return array with the grid size 5, 5", () => {
    expect(parseSizeInput("5 5")).toStrictEqual([5, 5]);
  });
  it("should return array with the grid size 3, 4", () => {
    expect(parseSizeInput("3 4")).toStrictEqual([3, 4]);
  });
});

describe("make new rover", () => {
  it("should create an object with x 1, y 2, orientation N", () => {
    expect(newRover("1 2 N")).toStrictEqual({ x: 1, y: 2, orientation: "N" });
  });
  it("should create an object with x 5, y 4, orientation S", () => {
    expect(newRover("5 4 S")).toStrictEqual({ x: 5, y: 4, orientation: "S" });
  });
});

describe("test L function", () => {
  it("should rotate rover to the left (west)", () => {
    expect(L({ x: 0, y: 0, orientation: "N" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "W",
    });
  });
  it("should rotate rover to the left (south)", () => {
    expect(L({ x: 0, y: 0, orientation: "W" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "S",
    });
  });
  it("should rotate rover to the left (east)", () => {
    expect(L({ x: 0, y: 0, orientation: "S" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "E",
    });
  });
  it("should rotate rover to the left (north)", () => {
    expect(L({ x: 0, y: 0, orientation: "E" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "N",
    });
  });
});

describe("test R function", () => {
  it("should rotate rover to the right (west)", () => {
    expect(R({ x: 0, y: 0, orientation: "S" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "W",
    });
  });
  it("should rotate rover to the right (south)", () => {
    expect(R({ x: 0, y: 0, orientation: "E" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "S",
    });
  });
  it("should rotate rover to the right (east)", () => {
    expect(R({ x: 0, y: 0, orientation: "N" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "E",
    });
  });
  it("should rotate rover to the right (north)", () => {
    expect(R({ x: 0, y: 0, orientation: "W" })).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "N",
    });
  });
});

describe("test M function", () => {
  it("should move one space north", () => {
    expect(M({ x: 2, y: 2, orientation: "N" }, [5, 5])).toStrictEqual({
      x: 2,
      y: 3,
      orientation: "N",
    });
  });
  it("should move one space east", () => {
    expect(M({ x: 2, y: 2, orientation: "E" }, [5, 5])).toStrictEqual({
      x: 3,
      y: 2,
      orientation: "E",
    });
  });
  it("should move one space south", () => {
    expect(M({ x: 2, y: 2, orientation: "S" }, [5, 5])).toStrictEqual({
      x: 2,
      y: 1,
      orientation: "S",
    });
  });
  it("should move one space west", () => {
    expect(M({ x: 2, y: 2, orientation: "W" }, [5, 5])).toStrictEqual({
      x: 1,
      y: 2,
      orientation: "W",
    });
  });

  it("should not move out of bounds", () => {
    expect(M({ x: 5, y: 5, orientation: "N" }, [5, 5])).toStrictEqual({
      x: 5,
      y: 5,
      orientation: "N",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 5, y: 5, orientation: "E" }, [5, 5])).toStrictEqual({
      x: 5,
      y: 5,
      orientation: "E",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 0, y: 0, orientation: "S" }, [5, 5])).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "S",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 0, y: 0, orientation: "W" }, [5, 5])).toStrictEqual({
      x: 0,
      y: 0,
      orientation: "W",
    });
  });
});

describe("parse  input", () => {
  it("should return array with the grid size 5, 5", () => {
    expect(parseSizeInput("5 5")).toStrictEqual([5, 5]);
  });
  it("should return array with the grid size 3, 4", () => {
    expect(parseRover("3 4 N")).toStrictEqual("3 4 N");
  });
  it("should return array with the grid size 3, 4", () => {
    expect(parseInstruction("MLMRMM")).toStrictEqual("MLMRMM");
  });
  it("should return array with the grid size 3, 4", () => {
    expect(parseInstruction("dgfdfg")).toStrictEqual(undefined);
  });
});

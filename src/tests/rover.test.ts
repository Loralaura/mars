import { readInstructions, initPlateau, newRover, L, R, M } from "../rover";

describe("make plateau", () => {
  it("should return array with the grid size 5, 5", () => {
    expect(initPlateau("5 5")).toBe([5, 5]);
  });
  it("should return array with the grid size 3, 4", () => {
    expect(initPlateau("3 4")).toBe([3, 4]);
  });
});

describe("make new rover", () => {
  it("should create an object with x 1, y 2, orientation N", () => {
    expect(newRover("1 2 N")).toBe({ x: 1, y: 2, orientation: "N" });
  });
  it("should create an object with x 5, y 4, orientation S", () => {
    expect(newRover("5 4 S")).toBe({ x: 5, y: 4, orientation: "S" });
  });
});

describe("test L function", () => {
  it("should rotate rover to the left (west)", () => {
    expect(L({ x: 0, y: 0, orientation: "N" })).toBe({
      x: 1,
      y: 2,
      orientation: "W",
    });
  });
  it("should rotate rover to the left (south)", () => {
    expect(L({ x: 0, y: 0, orientation: "W" })).toBe({
      x: 1,
      y: 2,
      orientation: "S",
    });
  });
  it("should rotate rover to the left (east)", () => {
    expect(L({ x: 0, y: 0, orientation: "S" })).toBe({
      x: 1,
      y: 2,
      orientation: "E",
    });
  });
  it("should rotate rover to the left (north)", () => {
    expect(L({ x: 0, y: 0, orientation: "E" })).toBe({
      x: 1,
      y: 2,
      orientation: "N",
    });
  });
});

describe("test R function", () => {
  it("should rotate rover to the right (west)", () => {
    expect(R({ x: 0, y: 0, orientation: "S" })).toBe({
      x: 1,
      y: 2,
      orientation: "W",
    });
  });
  it("should rotate rover to the right (south)", () => {
    expect(R({ x: 0, y: 0, orientation: "E" })).toBe({
      x: 1,
      y: 2,
      orientation: "S",
    });
  });
  it("should rotate rover to the right (east)", () => {
    expect(R({ x: 0, y: 0, orientation: "N" })).toBe({
      x: 1,
      y: 2,
      orientation: "E",
    });
  });
  it("should rotate rover to the right (north)", () => {
    expect(R({ x: 0, y: 0, orientation: "W" })).toBe({
      x: 1,
      y: 2,
      orientation: "N",
    });
  });
});

describe("test M function", () => {
  it("should move one space north", () => {
    expect(M({ x: 2, y: 2, orientation: "N" }, [5, 5])).toBe({
      x: 2,
      y: 3,
      orientation: "N",
    });
  });
  it("should move one space east", () => {
    expect(M({ x: 2, y: 2, orientation: "E" }, [5, 5])).toBe({
      x: 3,
      y: 2,
      orientation: "E",
    });
  });
  it("should move one space south", () => {
    expect(M({ x: 2, y: 2, orientation: "S" }, [5, 5])).toBe({
      x: 2,
      y: 1,
      orientation: "S",
    });
  });
  it("should move one space west", () => {
    expect(M({ x: 2, y: 2, orientation: "W" }, [5, 5])).toBe({
      x: 1,
      y: 2,
      orientation: "W",
    });
  });

  it("should not move out of bounds", () => {
    expect(M({ x: 5, y: 5, orientation: "N" }, [5, 5])).toBe({
      x: 5,
      y: 5,
      orientation: "N",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 5, y: 5, orientation: "E" }, [5, 5])).toBe({
      x: 5,
      y: 5,
      orientation: "E",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 0, y: 0, orientation: "S" }, [5, 5])).toBe({
      x: 0,
      y: 0,
      orientation: "S",
    });
  });
  it("should not move out of bounds", () => {
    expect(M({ x: 0, y: 0, orientation: "W" }, [5, 5])).toBe({
      x: 0,
      y: 0,
      orientation: "W",
    });
  });
});

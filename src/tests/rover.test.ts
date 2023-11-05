import { rover } from "../rover";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(rover(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(rover(2, 3)).toBe(5);
  });
});
``;

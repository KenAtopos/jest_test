const sum = require("./sum");

describe("example tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  test("null", () => {
    const n = null;
    // expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    // expect(n).toBeUndefine();
  });
});

describe("numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThanOrEqual(4);
  });

  test("add floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.299);
  });
});

describe("strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/g);
  });
});

describe("arrays", () => {
  const shoppingLists = ["a", "b", "c", "d"];
  expect(shoppingLists).toContain("a");
});

function foo() {
  throw new Error("error");
}

describe("exceptions", () => {
  test("compile error", () => {
    expect(() => foo()).toThrow(Error);
  });
});

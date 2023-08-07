const animals = [
  "Lion",
  "Tiger",
  "Elephant",
  "Giraffe",
  "Zebra",
  "Monkey",
  "Rhino",
  "Leopard",
  "Bear",
  "Penguin",
];

// beforeAll(() => {
//   console.log("before all");
//   const animals = [
//     "Lion",
//     "Tiger",
//     "Elephant",
//     "Giraffe",
//     "Zebra",
//     "Monkey",
//     "Rhino",
//     "Leopard",
//     "Bear",
//     "Penguin",
//   ];
// });

// beforeEach(() => {
//   console.log("before each");
//   const animals = [
//     "Lion",
//     "Tiger",
//     "Elephant",
//     "Giraffe",
//     "Zebra",
//     "Monkey",
//     "Rhino",
//     "Leopard",
//     "Bear",
//     "Penguin",
//   ];
// });

// afterEach(() => {
//   console.log("after all");
//   const animals = [
//     "Lion",
//     "Tiger",
//     "Elephant",
//     "Giraffe",
//     "Zebra",
//     "Monkey",
//     "Rhino",
//     "Leopard",
//     "Bear",
//     "Penguin",
//   ];
// });

// afterAll(() => {
//   console.log("after all");
//   const animals = [
//     "Lion",
//     "Tiger",
//     "Elephant",
//     "Giraffe",
//     "Zebra",
//     "Monkey",
//     "Rhino",
//     "Leopard",
//     "Bear",
//     "Penguin",
//   ];
// });

describe("animals array", () => {
  beforeEach(() => {
    console.log("before each");
    const animals = [
      "Lion",
      "Tiger",
      "Elephant",
      "Giraffe",
      "Zebra",
      "Monkey",
      "Rhino",
      "Leopard",
      "Bear",
      "Penguin",
    ];
  });

  test("should add animal to the end of the array", () => {
    animals.push("Cat");
    expect(animals.at(-1)).toBe("Cat");
  });

  test("should have initial length of 10", () => {
    expect(animals.length).toBe(11);
  });
});

describe("test something else", () => {
  test.only("something", () => {
    expect(true).toBeTruthy();
  });
});

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const { default: axios } = require("axios");
const fetchData = require("./async");

test("should return correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

test("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  console.log(mockCallback.mock);

  expect(mockCallback.mock.calls.length).toBe(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.results[0].value).toBe(42);
});

test("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  console.log(mock(), mock(), mock(), mock());
});

test("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "hello",
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe("hello");
});

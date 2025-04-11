const calculator = require("./calculator");

test("adds 2 and 2 to 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("adds 4 and 1 to 5", () => {
  expect(calculator.add(4, 1)).toBe(5);
});

test("subtracts 1 from 5 to 4", () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});

test("subtracts 10 from 45 to 35", () => {
  expect(calculator.subtract(45, 10)).toBe(35);
});

test("divides 10 by 2 to 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divides 100 by 4 to 25", () => {
  expect(calculator.divide(100, 4)).toBe(25);
});

test("multiplies 3 and 3 to 9", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("multiplies 4 and 9 to be 36", () => {
  expect(calculator.multiply(4, 9)).toBe(36);
});

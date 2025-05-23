const caesarCipher = require("./caesar-cipher");

test("cipher wraps appropriately at end of alphabet", () => {
  expect(caesarCipher("xyz", 3)).toMatch(/abc/);
});

test("cipher respects capitalization", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
});

test("cipher leaves punctuation alone", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
});

test("cipher accepts negative and large numbers", () => {
  expect(caesarCipher("Hello World", 28)).toMatch(/Jgnnq Yqtnf/);
  expect(caesarCipher("Hello World", -1)).toMatch(/Gdkkn Vnqkc/);
});

test("secure mode remove capitalization, punctuation, and spaces.", () => {
  expect(caesarCipher("Hello World!", 2, "stripped")).toMatch(/jgnnqyqtnf/);
});

test("returns original string if shift is 0 or effectively zero", () => {
  expect(caesarCipher("Hello World!", 0)).toMatch(/Hello World!/);
  expect(caesarCipher("Hello World!", 26)).toMatch(/Hello World!/);
});

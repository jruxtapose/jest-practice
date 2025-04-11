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

const capitalize = require('./capitalize');

test('capitalizes first letter in string of all lower case', () => {
    expect(capitalize('banana')).toMatch(/Banana/);
    expect(capitalize('apple')).toMatch(/Apple/);
    expect(capitalize('orange')).toMatch(/Orange/);
})

test('returns only first letter capitalized in mixed string', () => {
    expect(capitalize('oKaYbUdDy')).toMatch(/Okaybuddy/);
})

test('maintains spaces in string', () => {
    expect(capitalize('i just want you to know')).toMatch(/I just want you to know/)
})
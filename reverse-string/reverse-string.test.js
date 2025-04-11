const reverseString = require('./reverse-string');

test('reverses basic lowercase string', () => {
    expect(reverseString('orange')).toMatch(/egnaro/);
    expect(reverseString('apple')).toMatch(/elppa/);
    expect(reverseString('banana')).toMatch(/ananab/)
})

test('includes spaces and capitalization', () => {
    expect(reverseString('This is a TEST')).toMatch(/TSET a si sihT/)
    expect(reverseString('oKaY bUdDy')).toMatch(/yDdUb YaKo/)
})
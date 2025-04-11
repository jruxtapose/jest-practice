const analyzeArray = require ('./analyze-array')

test('should return correct analysis for a simple array', () => {
    const inputArray = [1,8,3,4,2,6];
    const expectedOutput = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(analyzeArray(inputArray)).toEqual(expectedOutput);
})

test('should handle an empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    })
})

test('should handle an array with one item', () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    })
})
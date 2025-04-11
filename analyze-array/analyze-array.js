function analyzeArray(inputArray) {
    if (!Array.isArray(inputArray)){
        return null;
    }

    const length = inputArray.length;

    const calculateAverage = function() {
        if (length === 0) {
            return null;
        }

        return inputArray.reduce((prev, current) => prev + current, 0) / length;
    };

    const findMinimumMaximum = function() {
        if (length === 0) {
            return { minimum: null, maximum: null};
        }

        const sortedArray = [...inputArray]
        sortedArray.sort((a, b) => a - b);

        return {'minimum': sortedArray[0], 'maximum': sortedArray[sortedArray.length - 1]}
    }

    const avgResult = calculateAverage();
    const minMaxResult = findMinimumMaximum();

    return {
        'average': avgResult,
        'min': minMaxResult.minimum,
        'max': minMaxResult.maximum,
        'length': length
    }
}

module.exports = analyzeArray;

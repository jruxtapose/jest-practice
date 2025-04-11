function capitalize(string){
    const firstLetter = string.slice(0, 1);
    const remainingLetters = string.slice(1);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const capitalizedRemainingLetters = remainingLetters.toLowerCase();
    const capitalizedString = capitalizedFirstLetter.concat(capitalizedRemainingLetters);
    return capitalizedString;
}

module.exports = capitalize;
function caesarCipher(string, shift, mode) {
  // Error if a string or invalid number is entered
  if (typeof string !== "string")
    throw new Error("Element to be encoded must be a string.");
  if (typeof shift !== "number" || !Number.isInteger(shift))
    throw new Error("Shift must be an integer.");

  // Normalizes shift allowing negative or large numbers to be used.
  const effectiveShift = ((shift % 26) + 26) % 26;

  // Returns string if shift is effectively zero.
  if (effectiveShift === 0) return string;

  const plaintextAlphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const plaintextAlphabetUpper = plaintextAlphabetLower.toUpperCase();

  let encryptedMessage = "";
  const cipherAlphabetLower = generateCipherAlphabet(
    effectiveShift,
    plaintextAlphabetLower
  );
  const cipherAlphabetUpper = cipherAlphabetLower.toUpperCase();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let index = plaintextAlphabetLower.indexOf(char); // Check lowercase

    if (index !== -1) {
      // Found in lowercase
      encryptedMessage += cipherAlphabetLower[index];
    } else {
      index = plaintextAlphabetUpper.indexOf(char); // Check uppercase
      if (index !== -1) {
        // Found in uppercase
        encryptedMessage += cipherAlphabetUpper[index];
      } else {
        // Not a letter
        if (mode !== 'secure') {
          encryptedMessage += char;
        }
      }
    }
  }
  if(mode !== 'secure'){
    return encryptedMessage;
  } else {
    return encryptedMessage.toLowerCase();
  }
}

const generateCipherAlphabet = (shift, alphabet) => {
  const frontHalf = alphabet.slice(shift);
  const backHalf = alphabet.slice(0, shift);
  return frontHalf.concat(backHalf);
};

module.exports = caesarCipher;

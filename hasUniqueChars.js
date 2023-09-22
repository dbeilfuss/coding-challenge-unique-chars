/*
Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

// Write your code below

const hasUniqueChars = (word) => {
  let lowerCaseWord = word.toLowerCase();
  let isUnique = true;
  for (let char of lowerCaseWord) {
    // console.log(`testing char ${char} at ${lowerCaseWord.indexOf(char)}`);
    for (
      let i = lowerCaseWord.indexOf(char) + 1;
      i < lowerCaseWord.length;
      i++
    ) {
      //   console.log(`testing against char ${lowerCaseWord[i]} at ${i}`);
      if (lowerCaseWord[i] === char) {
        isUnique = false;
        break;
      }
    }
    if (isUnique === false) {
      break;
    }
  }
  return isUnique;
};

console.log(hasUniqueChars("Ginger"));

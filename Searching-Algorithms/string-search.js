/**
 * You can search through string
 *
 * Create a function stringSearch that takes two arguments longString and shortString.
 * Search for shortString in longString and return how many times it occurs.
 */

function stringSearch(longString, shortString) {
  let count = 0;

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (shortString[j] !== longString[i + j]) {
        break;
      }
      if (j === shortString.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("lorie loled", "lo"));

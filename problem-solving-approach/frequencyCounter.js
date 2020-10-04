/**
 * Uses an object to collect and compare data and their instances.
 * For instance we can use the frquency counter to check how many times
 * a character occurs in a string.
 */

//  CHALLENGE
/**
 * Write a function called 'same', whic accepts two arrays. The function
 * should return true if every value in the array has its corresponding value
 * squared in the second array. The frequency of values must be the same.
 *
 * e.g same([1,2,3],[4,1,9]) should return true
 */

function same(arr1, arr2) {
  // if the lengths differ, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // loop over the array and check for the index of the square of each value
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //   check if the square of the value exists in the second array or not
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

/**
 * The solution above is not a good one because its Big O is quadratic time i.e O(n^2)
 * Nested loops result in O(n^2).
 *
 * Its better to have two separate loops than to have them nested.
 */

function sameFreq(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 1) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 1) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFreq([1, 2, 3, 2], [9, 1, 4, 4]));

/**
 * Given two strings, check if one is an anagram of the other
 */
function validAnagram(firstStr, secondStr) {
  // count the length of the strings, if not equal then not anagram
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < firstStr.length; i++) {
    let letter = firstStr[i];
    // if letter exists, increment it otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < secondStr.length; i++) {
    // can't find letter or zero, then it is not an anagram
    let letter = secondStr[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[(letter -= 1)];
    }
  }
  return true;
}

console.log(validAnagram("car", "arc"));

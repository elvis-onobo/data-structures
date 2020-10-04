/**
 * Create pointers or values that correspond to an index or position and
 * move towards the beginning, end or middle based on a certain condition.
 */

//  CHALLENGE
/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first two numbers that add up to zero and
 * return those two values of undefined if there isn't a pair.
 */

//  The inefficient solution
/**
 * This solution is inefficient because it has a runtime complexity of O(n^2)
 * which is common with nested loops
 */
// function sumZeroInefficient(arr) {
//   let iteration = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log("This is iteration ", iteration++);

//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZeroInefficient([-5, -9, -8, -1, 0, 1, 2, 3, 4]));

/**
 * sumZero is more efficient and does just 6 iterations against 32 iterations
 * by sumZeroInefficient
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let iteration = 1;

  while (left < right) {
    console.log("This is iteration ", iteration++);

    let sum = arr[left] + arr[right];
    if (sum === 0) {
      // we found our values, return them
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // sum > 0 means right value is bigger than left value.
      // So we subtract one to go to the next rightmost value
      right--;
    } else {
      // sum < 0 means is smaller than right and should be increased to match right
      // so we add 1 to go to -3 on the left
      left++;
    }
  }
}

sumZero([-5, -9, -8, -1, 0, 1, 2, 3, 4]);

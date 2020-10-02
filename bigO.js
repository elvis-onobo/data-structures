/**
 * Used to describe the performance of an algorithm.
 * This helps us determines if the algorithm is scalable or not.
 *
 * An algorithm may perform well with small data but will it do same with
 * a large data set?
 *
 * Rather than checking the time(which is variable), Big O checks the
 * number of operations(looping, addtion, subtraction etc) the computer
 * will have to perform as a result of the code
 *
 * Big O considers how the runtime grows as the inputs grow
 */

/*
 * NB: Runtime complexity focuses on how much the algorithm
 * slows down as the input grows larger
 */

//  O(1): Algorithm runs in constant time

let arr = [1, 2, 3];

function constantTime(data) {
  console.log(data[0]);
}
/**
 * No matter how large the array gets, we will only be printing the first item
 * therefore this algorithm runs in constant time and the runtime complexity
 * is O(1)
 *  */
constantTime(arr);

// O(n): Algorithm falls in linear time
// This means the cost(how it slows down) of the algorithm grows as the
// input increases
let secondarr = [];

function linearTime() {
  // O(n): where n == the size of the input
  for (let i = 0; i < secondarr.length; i++) {
    const element = secondarr[i];
  }
}

linearTime();

/**
 * In the situation below, the two loops give us O(n) in two places
 * which can be approximated to O(n). Still a linear growth
 */

// O(n + n) i.e O(2n) i.e also O(n)
function twoLoops() {
  // O(n)
  for (let i = 0; i < secondarr.length; i++) {
    const element = secondarr[i];
  }

  // O(n)
  for (let i = 0; i < secondarr.length; i++) {
    const element = secondarr[i];
  }
}

/**
 * The loops below will increase the cost of the algorithm
 * because the inputs have increased. i.e num and name
 *
 * It can be simplified to O(n) since it still increases in linear time.
 * NB: Simple loops run in linear time
 */
let numArr = [1, 2, 3];
let nameArr = [Elvis, Blessing, Faith];

function twoDifferentLoops() {
  // O(n)
  for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i];
  }

  // O(n)
  for (let i = 0; i < nameArr.length; i++) {
    const element = nameArr[i];
  }
}

/**
 * QUADRATIC TIME: Nested loops run in quadratic time
 * This grows slower faster than linear time algorithms
 *
 * O(n * n) i.e O(n^2)
 */
function quadraticTime() {
  for (let index = 0; index < firstArray.length; index++) {
    // First loop: O(n)
    for (let i = 0; i < firstArray.length; i++) {
      // Second loop: O(n)
      console.log(firstArray[index][i]);
    }
  }
}

/**
 * LOGARITHMIC TIME: Algorithms that run in logarithmic time are more efficeint
 * than thos that run in quadratic time and linear time.
 *
 * This is because they grow slow to a point then thay start get faster again
 * Their speed gets better with time
 *
 * O(log n)
 */

/**
 * EXPONENTIAL TIME: O(2^n)
 * This is the opposite of logarithmic time because it grows slower very quickly
 */

//  HOW MUCH SPACE AN ALGORITHM REQUIRES

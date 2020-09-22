/**
 * Used to describe the performance of an algorithm.
 * This helps us determines if the algorithm is scalable or not.
 *
 * An algorithm may perform well with small data but will it do same with
 * a large data set?
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
 */
let numArr = [1, 2, 3],
let nameArr = [Elvis,Blessing,Faith],

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
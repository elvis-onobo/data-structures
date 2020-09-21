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

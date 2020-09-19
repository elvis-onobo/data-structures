/**
 * Used to describe the performance of an algorithm.
 * This helps us determines if the algorithm is scalable or not.
 *
 * An algorithm may perform well with small data but will it do same with
 * a large data set?
 */

//  O(1): Algorithm runs in constant time

let arr = [];

function printFirst(data) {
  console.log(data[0]);
}
/**
 * No matter how large the array gets, we will only be printing the first item
 * therefore this algorithm runs in constant time and the runtime complexity
 * is O(1)
 *  */

printFirst(arr);

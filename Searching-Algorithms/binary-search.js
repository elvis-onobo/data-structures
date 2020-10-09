/**
 * Binary search only works on sorted arrays. It eliminates half of the
 * data set at any point in time and checks the other half for the value
 * required.
 *
 * It is much faster than Linear Search
 */

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 7, 9, 12, 13, 15, 19, 20, 21], 20));

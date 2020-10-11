/**
 * Bubble sort works by sorting one item against the one right next to it and
 * swaps/switches their position based on the sorting pattern required.
 */

function bubbleSort(arr) {
  // Get the total lenght and decrement it after each item is finished being sorted
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // now compare and switch position
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * Bubble sort works by sorting one item against the one right next to it and
 * swaps/switches their position based on the sorting pattern required.
 *
 * Generally, it sorts the larger items to the end
 */

function bubbleSort(arr) {
  let noSwaps; // var to prevent loop from running if sort finishes early
  // Get the total lenght and decrement it after each item is finished being sorted
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // now compare and switch position
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 1, 2, 3, 8, 9]));
console.log(bubbleSort(["c", "d", "b", "a"]));

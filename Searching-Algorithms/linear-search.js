/**
 * The runtime complexity of linear search is O(n)
 *
 * Linear search searches through a range of data in order until it finds
 * the data required. It can work with unsorted data
 */

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -i;
}

console.log(linearSearch(["El", "Faith", 1, 3], 3));

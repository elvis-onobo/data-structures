/**
 * SELECTION SORT is like Bubble sort but it places large values at the beginning
 * of the array rather than at the end of the array like Bubble sort does
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([34, 22, 39, 64, 11, 12, 14, 18, 22]));
console.log(selectionSort(["e", "l", "v", "i", "s", "g", "h", "q", "A"]));

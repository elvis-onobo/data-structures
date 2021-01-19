/**
 * INSERTION SORT builds up the sort by gradually creating a larger left half which
 * is always sorted
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j +1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort([4, 8, 9, 21, 64, 112, 12, 5]));
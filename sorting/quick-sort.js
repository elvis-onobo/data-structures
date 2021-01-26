/**
 * Quick sort picks a pivot value & sorts them in two directions; greater and less  in no
 * particular order.
 * 
 * Then it picks them and sorts them gradually with a new pivot until everything is sorted.
 */

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, idx1, idx2) => {
        [arr[idx1], arr[idx2]] =[arr[idx2], arr[idx1]]
    }

    // assuming pivot is always the first element
    var pivot = arr[start]
    var swapIdx = start


    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            // swap the position of the value
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}
 
function quickSort(arr, left = 0, right = arr.length - 1 ) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // sorting the left side of the result from pivot()
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)   
    }
    return arr
}

console.log('The sorted array is >>> ', quickSort([4,6,2,1,7,8,10,9])) 
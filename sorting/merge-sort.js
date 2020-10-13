/**
 * MERGE SORT: is a combination of three processes, splitting up, merging 
 * and sorting
 * 
 * Merge sort breaks an array into its smallest unit then merges them back
 * while simultaneously sorting them.
 */

function merge(arr1, arr2){
    let results = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        results.push(arr2[j])
        j++
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}
 
function mergeSort(arr) {
    if (arr.length <= 1) return arr

    // split the array
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    
    // merge the arrays back into one
    return merge(left, right)
}

console.log(mergeSort([10,24,26,27,32,31,51]));
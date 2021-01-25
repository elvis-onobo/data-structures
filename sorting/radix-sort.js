/**
 * Radix sort never makes comparison but just works based off the fact that the more the digits
 * the bugger the value.
 */

//  Get the digit of position of each digit
function getDigit(num, i) {
    return Math.floor( Math.abs(num) / Math.pow(10,i) % 10)
}

// console.log(getDigit(7423, 2))

/**
 * Returns the number of digits in num
 */
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * Takes a list of numbers and returns the one with the most digits
 */
function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))        
    }
    return maxDigits
}

/**
 * checks how many digits tha=e largest number has,
 * 
 */
function radixSort(nums) {
    // check how many digits the largest number has
    let maxDigitsCount = mostDigits(nums)
    
}

radixSort([23, 24,564, 846, 87,431, 695,9584])
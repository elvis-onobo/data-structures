/**
 * The Sliding Window technique is useful for finding a subset of continuous
 * data in some data like an array or string.
 *
 * Write a function called maxSubarraySum which accepts an array of integers
 * and a number called n. The function should calculate the maximum sum of
 * n consecutive elements in the array
 */

//  The Big O of this solution is O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // add the first n values
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // subtract the oldest value and add the next value
    tempSum = tempSum - arr[i - num] + arr[i];
    // get the maximum and update maxSum if tempSum is larger
    maxSum = math.max(maxSum, tempSum);
  }
  return maxSum;
}

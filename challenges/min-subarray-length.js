/**
 * Write a function called minSubArrayLen which accepts two parameters - array of positive integer numbers and a positive integer
 * This function should return the minimal length of a contiguous subarray of which the sum is greater or equal to the integer
 * passed to the function. If there isn't one, then return 0 instead.
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Given an array of positive integers and positive integer sum find out the smallest subarray length
 * required to reach greater or equal sum of all elements equal to provided sum
 * 2. Inputs:
 * - array
 * - n
 * 3. Outputs:
 * - minimum length
 * 4. Can outputs be determined from the inputs:
 * Yes, if array is null or empty then return 0
 * Yes, if array is does not contain sum greater or equal to provided one - return 0
 * 5. Naming of the important pieces:
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - minSubArrayLen([2,3,1,2,4,3], 7) => 2
 * - minSubArrayLen([1], 2) => 0
 * 2. Complex examples
 * - minSubArrayLen([1, 3, 20, 4, 19, 5], 3) => 1
 * - minSubArrayLen([1, 2, 3], 4) => 2
 * 3. Edge cases (empty inputs)
 * 4. Invalid inputs
 */

/**
 * Break it down
 */
// const minSubArrayLen = (sorted) => {

// };

const minSubArrayLen = (arr, n) => {};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([1], 2)); // 0
console.log(minSubArrayLen([1, 3, 20, 4, 19, 5], 3)); // 1
console.log(minSubArrayLen([1, 2, 3], 4)); // 2
console.log(minSubArrayLen([], 4)); // 0
console.log(minSubArrayLen(null, 34)); // 0

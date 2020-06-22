/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in array
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Create a function which finds the maximum sum of n consecutive elements in given array.
 * 2. Inputs:
 * - array
 * - n
 * 3. Outputs:
 * - maximum sum
 * 4. Can outputs be determined from the inputs:
 * Yes, if array is not null or empty and contains only numbers
 * Yes, if array is longer then N
 * 5. Naming of the important pieces:
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - maxSubarraySum([1, 3, 20, 4, 5], 2) => 24
 * - maxSubarraySum([1, 2, 4, 3, 2], 2) => 6
 * 2. Complex examples
 * - maxSubarraySum([1, 3, 20, 4, 19, 5], 3) => 43
 * - maxSubarraySum([1, 3, -20, 45, 19, 5], 4) => 49
 * 3. Edge cases (empty inputs)
 * 4. Invalid inputs
 */

/**
 * Break it down
 */
// const maxSubarraySum = (sorted) => {
// create currentIndex = 0
// create currentSum = 0

// iterate starting
// iterate over i to n
// tempSum += item
// if bigger then currentSum assign new sum
// return currentSum
// };

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }

  // create currentSum - sum
  let currentSum = -Infinity;

  // iterate starting
  for (let i = 0; i <= arr.length - n; i++) {
    // tempSum += item
    let tempSum = 0;

    // iterate over i to n
    for (let j = i; j < i + n; j++) {
      tempSum += arr[j];
    }

    // if bigger then currentSum assign new sum
    if (tempSum > currentSum) {
      currentSum = tempSum;
    }
  }

  return currentSum;
};

console.log(maxSubarraySum([1, 3, 20, 4, 5], 2)); // 24
console.log(maxSubarraySum([1, 2, 4, 3, 2], 2)); // 7
console.log(maxSubarraySum([1, 3, 20, 4, 19, 5], 3)); // 43
console.log(maxSubarraySum([1, 3, -20, 45, 19, 5], 4)); // 49

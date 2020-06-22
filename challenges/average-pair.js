/**
 * Write a function called averagePair. Given a sorted array of integers and target average,
 * determine if there is a pair of values in the array where the average of the pair equal the target average.
 * There may be more than one pair matches the average target.
 */

/**
 * Problem: Make a function accepting sorted array of integer numbers and average value of some pair.
 * Determine if the sorted array has any pair which results in average of given input
 * Inputs: sortedArray, averageNumber
 * Outputs: true or false
 */

/**
 * Examples:
 * averagePair([10, 20, 40], 30); // true
 * averagePair([2, 4, 5], 2.2); // false
 * averagePair([11, 4, 3], 7); // true
 */

/**
 * Break it down
 * const averagePair = (sorted, average) => {
 *  // if empty, return false
 *  // iterate over each item and next one
 *  // sum them and compare with average, if same - return true
 *  // return false
 * }
 */

const averagePair = (sorted, average) => {
  // if empty, return false
  if (!Array.isArray(sorted) || !sorted.length) {
    return false;
  }

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const leftItem = sorted[left];
    const rightItem = sorted[right];

    // sum left and right values,
    const currentAverage = (leftItem + rightItem) / 2;

    // if smaller then average, increment left, otherwise decrement right, if equal return true
    if (currentAverage < average) {
      left++;
    } else if (currentAverage > average) {
      right--;
    } else {
      return true;
    }
  }

  return false;
};

console.log(averagePair([10, 20, 40], 30)); // true
console.log(averagePair([2, 4, 5], 2.2)); // false
console.log(averagePair([3, 4, 11], 7.5)); // true
console.log(averagePair([-29, -2, 0, 3, 4, 11, 20], 15.5)); // true
console.log(averagePair([-29, -2, 0, 3, 4, 11, 20], 7)); // true
console.log(averagePair([], 33)); // false
console.log(averagePair(null, 33)); // false

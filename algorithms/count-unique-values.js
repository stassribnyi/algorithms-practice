/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in array, but it will be always sorted.
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Make a function which founds amount of unique values inside of the sorted array.
 * 2. Inputs:
 * - sorted array
 * 3. Outputs:
 * - numbers of unique values
 * 4. Can outputs be determined from the inputs:
 * 5. Naming of the important pieces:
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - countUniqueValues([1, 1, 2, 2, 2]) => 2
 * - countUniqueValues([1, 2, 16, 25]) => 4
 * 2. Complex examples
 * 3. Edge cases (empty inputs)
 * - countUniqueValues([]) => 0
 * 4. Invalid inputs
 * - countUniqueValues(null) => undefined
 */

/**
 * Break it down
 */
// const countUniqueValues = (sorted) => {
// check inputs validity, if not valid - return undefined
// check inputs length, if empty - return 0
// create left - 0
// create lastUnique - 0
// create counter - 1
// iterate while left < sorted.length
// increment left, if new value is same as previous, then do nothing
// otherwise increment counter and change lastUnique index
// return counter
// };

const countUniqueValues = (sorted) => {
  // check inputs validity, if not valid - return undefined
  if (!Array.isArray(sorted)) {
    return undefined;
  }

  // check inputs length, if empty - return 0
  if (!sorted.length) {
    return 0;
  }

  let currentIndex = 0;
  let lastUniqueIndex = 0;
  let uniqueCounter = 0;

  // iterate while left < sorted.length
  while (currentIndex < sorted.length) {
    // increment left, if new value is same as previous, then do nothing
    currentIndex++;

    if (sorted[lastUniqueIndex] === sorted[currentIndex]) {
      continue;
    }

    // otherwise increment counter and change lastUnique index
    uniqueCounter++;
    lastUniqueIndex = currentIndex;
  }

  return uniqueCounter;
};

console.log(countUniqueValues([1, 1, 2, 2, 2])); // 2
console.log(countUniqueValues([1, 2, 16, 25])); // 4
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues()); // undefined

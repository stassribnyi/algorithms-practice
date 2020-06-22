/**
 * Write a function called "same", which accepts two arrays.
 * The function should return true if every value in the second array has
 * it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Create a function which compares 2 arrays
 * - Second array must have same length as first one
 * - Second array must have squared values of first one
 * - The order of values in second array does not matter
 * - Frequency of the values in second array must be the same as in first one
 * 2. Inputs:
 * - firstArray
 * - secondArray
 * 3. Outputs:
 * - true (if same) or false (if not)
 * 4. Can outputs be determined from the inputs:
 * - What should function return if one or both of the arrays are null or empty?
 * 5. Naming of the important pieces:
 * - isNullOrEmpty
 * - isLengthSame
 * - frequencyCounter
 * - isSame
 * - ???
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - same([1, 4, 5], [1, 16, 25]) => true
 * - same([1, 5], [1, 16, 25]) => false // different length
 * - same([1, 1, 5], [1, 16, 16]) => false // different frequency
 * 2. Complex examples
 * 3. Edge cases (empty inputs)
 * - same([], []) => true
 * - same(null, [1, 16, 25]) => false
 * 4. Invalid inputs
 * - same([[]], [[]]) => false
 * - same([1, 4, 4], [1, 16, '16']) => false ???
 */

/**
 * Break it down
 */
// const same = (arr1, arr2) => {
// check inputs validity, if not valid - return
// check inputs length, if not the same - return
// create frequencyCounter
// iterate over first array
// get from frequencyCounter counter value by squared item value as a key
// if not exists, then add with counter 1, otherwise increment counter by 1
// iterate over second array
// check if frequencyCounter has same value as item
// if not, return false, otherwise
// decrement and check counter value, if less then 0, return false, otherwise
// check frequencyCounter if it has any keys greater then 0, return false, otherwise true
// };

/**
 * Original solution, before refactoring
 */
const sameOld = (arr1, arr2) => {
  // check inputs validity, if not valid - return
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  // check inputs length, if not the same - return
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create frequencyCounter
  const frequencyCounter = {};

  // iterate over first array
  for (const item of arr1) {
    const frequencyCounterKey = Math.pow(item, 2);
    // get from frequencyCounter counter value by squared item value as a key
    // if not exists, then add with counter 1, otherwise increment counter by 1
    if (frequencyCounter[frequencyCounterKey]) {
      frequencyCounter[frequencyCounterKey]++;
    } else {
      frequencyCounter[frequencyCounterKey] = 1;
    }
  }

  // iterate over second array
  for (const item of arr2) {
    // check if frequencyCounter has same key as current item and
    // counter is greater then 1, otherwise return false
    if (frequencyCounter[item] > 0) {
      // decrement frequencyCounter
      frequencyCounter[item]--;
    } else {
      return false;
    }
  }

  // check frequencyCounter if it has any keys greater then 0, return false, otherwise true
  for (const counter of Object.entries(frequencyCounter)) {
    if (counter > 0) {
      return false;
    }
  }

  return true;
};

/**
 * Refactored solution
 */
const same = (arr1, arr2) => {
  // check inputs validity, if not valid - return
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  // check inputs length, if not the same - return
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create frequencyCounter
  const frequencyCounter = {};

  // iterate over first array
  for (const item of arr1) {
    // get from frequencyCounter counter value by squared item value as a key
    // if not exists, then add with counter 1, otherwise increment counter by 1
    const counterKey = Math.pow(item, 2);

    frequencyCounter[counterKey] = (frequencyCounter[counterKey] || 0) + 1;
  }

  // iterate over second array
  for (const item of arr2) {
    // check if frequencyCounter hasn't same key as current item and
    // counter is falsy (!0) return false, otherwise continue
    if (!frequencyCounter[item]) {
      return false;
    }

    // decrement frequencyCounter
    frequencyCounter[item]--;
  }

  return true;
};

console.log('Check solution with valid inputs');
console.log(same([1, 4, 5], [1, 16, 25]));
console.log(same([1, 1, 5], [1, 25, 1]));

console.log(same([1, 1, 5], [1, 25, 25]));
console.log(same([1, 5, 5], [1, 25]));
console.log(same([1, 5], [1, 16, 25]));

console.log('\nCheck solution with invalid inputs:');
console.log(same(null, [1, 16, 16]));
console.log(same([[]], [[]]));
console.log(same([1, 4, 4], [1, 16, '16']));

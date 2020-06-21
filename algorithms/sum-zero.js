/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exists.
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Create a function which accepts sorted array and returns either first pair of values (from array ends)
 * that sums to zero or undefined if there is no such pair.
 * 2. Inputs:
 * - sorted arr1
 * 3. Outputs:
 * - [-value, value] (if pair has been found) or undefined(if not)
 * 4. Can outputs be determined from the inputs:
 * - Does sorted array contains duplicates? for ex [-1, 0, 0, 1]
 * 5. Naming of the important pieces:
 * - i - represents index of first item
 * - j - represents index of second item
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - sumZero([-4,-2,-1, 0, 1, 2, 3]) // [-2, 2]
 * - sumZero([-4,-1, 0, 2, 3]) // undefined
 * 2. Complex examples
 * 3. Edge cases (empty inputs)
 * - sumZero([]) // undefined
 * 4. Invalid inputs
 * - sumZero(null) => undefined
 */

/**
 * Break it down
 */
// const sumZero = (sorted) => {
// check sorted, if null or empty - return undefined
// create i - index of first item in array
// create j - index of last item in array
// check if sorted[i] + sorted[j] === 0 return [sorted[i], sorted[j]]

// };

/**
 * First implementation O(n^2)
 */
const sumZeroOld = (sorted) => {
  if (!Array.isArray(sorted) || sorted.length < 2) {
    return undefined;
  }

  for (let i = 0; i < sorted.length; i++) {
    const first = sorted[i];

    for (let j = sorted.length; j >= 0; j--) {
      if (i === j) {
        continue;
      }

      const second = sorted[j];

      if (Math.abs(first) === second) {
        return [first, second];
      }
    }
  }

  return undefined;
};

/**
 * Refactored implementation O(n)
 */
const sumZero = (sorted) => {
  if (!Array.isArray(sorted) || sorted.length < 2) {
    return undefined;
  }

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const first = sorted[left];
    const firstAbs = Math.abs(first);
    const second = sorted[right];

    if (firstAbs < second) {
      right--;

      continue;
    }

    if (firstAbs > second) {
      left++;

      continue;
    }

    if (firstAbs === second) {
      return [first, second];
    }
  }

  return undefined;
};

console.log(sumZero([-4, -2, -1, 0, 1, 2, 3])); // [-2, 2]
console.log(sumZero([-4, -2, -1, 0, 1, 3])); // [-1, 1]
console.log(sumZero([-4, -1, 0, 2, 3])); // undefined
console.log(sumZero([])); // undefined
console.log(sumZero(null)); //undefined

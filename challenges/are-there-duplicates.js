/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are many duplicates among the arguments passed in.
 */

/**
 * Problem: create a function which could handle any amount of params and check all of them for duplicates
 * Input: ...args
 * Output: true or false
 */

/**
 * Examples:
 * - areThereDuplicates(1, 2, 3, 5); // true
 * - areThereDuplicates(1, 1, 2); // false
 * - areThereDuplicates('1', '2', '3'); // true
 * - areThereDuplicates(0, 0); // false
 * - areThereDuplicates(0, null); // true?
 * - areThereDuplicates(); // undefined?
 */

/**
 * Break it down
 * const areThereDuplicates = (...args => {
 *  // check if args, if not return undefined
 *  // create left index
 *  // create right index
 *  // create store for items
 *  // iterate to the middle of array and
 *  // store left and right value
 *  // if value is already in store return true
 *  // return false
 * }
 */

const areThereDuplicates = (...args) => {
  const counter = {};

  for (const item of args) {
    if (counter[item]) {
      return true;
    }

    counter[item] = true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3, 5)); // false
console.log(areThereDuplicates(1, 1, 2)); // true
console.log(areThereDuplicates('1', '2', '3')); // false
console.log(areThereDuplicates(0, 0)); // true
console.log(areThereDuplicates(0, null)); // true?

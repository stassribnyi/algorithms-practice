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
 *  // create i for current unique value
 *  // create j for current item
 *  // lets assume first one is a unique one, then starting from second
 *  // check i
 *  // return true
 * }
 */

const areThereDuplicates = (...args) => {};

console.log(areThereDuplicates(1, 2, 3, 5)); // true
console.log(areThereDuplicates(1, 1, 2)); // false
console.log(areThereDuplicates('1', '2', '3')); // true
console.log(areThereDuplicates(0, 0)); // false
console.log(areThereDuplicates(0, null)); // true?

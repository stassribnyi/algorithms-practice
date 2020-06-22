/**
 * Write a function called sameFrequency. Given two integers, find out if the two numbers have the same frequency of digits.
 */

/**
 * Problem: function which verifies whether 2 digits has the same frequency of different digits.
 * Input: numberOne, numberTwo
 * Output: true or false
 */

/**
 * Examples:
 * - sameFrequency(281, 812); // true
 * - sameFrequency(281, 822); // false
 * - sameFrequency(281, 8220); // false, different amount of digits
 * - sameFrequency(0, 0); // true
 * - sameFrequency(0, null); // undefined
 */

/**
 * Break it down
 * const sameFrequency = (numberOne, numberTwo) => {
 *  // check if any number is invalid, then return undefined
 *  // if it is the same, return true
 *  // create frequency counter
 *  // iterate over first number as string
 *  // set frequency counter for each digit and if digit already exists, increment it
 *  // iterate over second number as string
 *  // if digit doesnt exist in frequency counter or it is has less then 1 value return false
 *  // decrement frequency counter for given digit
 *  // return true
 * }
 */

const sameFrequency = (numberOne, numberTwo) => {
  // check if any number is invalid, then return undefined
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
    return undefined;
  }

  // if it is the same, return true
  if (numberOne === numberTwo) {
    return true;
  }

  // create frequency counter
  const frequencyCounter = {};

  // iterate over first number as string
  for (const digit of numberOne.toString()) {
    // set frequency counter for each digit and if digit already exists, increment it
    frequencyCounter[digit] = frequencyCounter[digit] + 1 || 1;
  }

  // iterate over second number as string
  for (const digit of numberTwo.toString()) {
    if (frequencyCounter[digit] > 0) {
      // decrement frequency counter for given digit
      frequencyCounter[digit]--;

      continue;
    }

    // if digit doesnt exist in frequency counter or it is has less then 1 value return false
    return false;
  }

  return true;
};

console.log(sameFrequency(281, 812)); // true
console.log(sameFrequency(281, 822)); // false
console.log(sameFrequency(234234, 432423)); // true
console.log(sameFrequency(281, 8220)); // false, different amount of digits
console.log(sameFrequency(0, 0)); // true
console.log(sameFrequency(0, null)); // undefined

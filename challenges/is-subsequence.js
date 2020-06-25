/**
 * Write a function called isSubsequence which takes in two strings and
 * checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */

/**
 * Problem: Create a function which takes 2 strings and determines whether second string contains subsequence of chars from the first one and in the same order.
 * Inputs: str1, str2
 * Outputs: true or false
 */

/**
 * Examples:
 * isSubsequence('demo', 'dilemmo'); // true
 * isSubsequence('ring', 'string'); // true
 * isSubsequence('test', 'task'); // false
 * isSubsequence('artificial', 'art in fiction all'); // true
 */

/**
 * Break it down
 * const isSubsequence = (str1, str2) => {
 *  // check strings for equality
 *  // create i for str1
 *  // create j for str2
 *  // iterate over str2
 *  // check each value of str2 with current value of str1
 *  // if equal then increment str1 index
 *  // check str1 index with the length of the str1
 *  // if str1 index is the same length as an array it means that we counted all chars from str1 in str2
 *  // return true
 *  // otherwise increment str2 index and continue
 *  // return false
 * }
 */

const isSubsequence = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }

    j++;
  }

  return false;
};

console.log(isSubsequence('demo', 'dilemmo')); // true
console.log(isSubsequence('ring', 'string')); // true
console.log(isSubsequence('test', 'task')); // false
console.log(isSubsequence('artificial', 'art in fiction all')); // true

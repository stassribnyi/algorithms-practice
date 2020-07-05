/**
 * Write a function called findLongestSubstring,
 * which accepts a string and returns the length of the longest substring with all distinct characters.
 */

/**
 * Problem: Create a function which accepts string and returns the length of the longest subsequence of unique characters.
 * Inputs: str
 * Outputs: number of characters in longest substring
 */

/**
 * Examples:
 * findLongestSubstring(''); // 0
 * findLongestSubstring('rithmschool'); // 7
 * findLongestSubstring('thisisawesome'); // 6
 * findLongestSubstring('thecatinthehat'); // 7
 * findLongestSubstring('bbbbbb'); // 1
 * findLongestSubstring('longestsubstring'); // 8
 * findLongestSubstring('thisishowwedoit'); // 6
 */

/**
 * Break it down
 * const findLongestSubstring = (str) => {
 *  // check is string not null or empty, otherwise return 0
 *  // create start window index
 *  // create end window index
 *  // create maxLength
 *  // iterate over str while start is less the str length
 *  // create a substring from start to end
 *  // increment end and check does substring contains str[end]
 *  // if not, check current length of substring + str[end] and set value of maxLength if it is bigger
 *  // otherwise, increment start until str[end] is uniq
 *  // return maxLength
 * }
 */

const findLongestSubstring = (str) => {
  // check is string not null or empty, otherwise return 0
  if (!str) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let maxLength = 0;

  // iterate over str while start is less the str length
  while (start < str.length) {
    // create a substring from start to end
    if (!str.substring(start, end).includes(str.charAt(end))) {
      // increment end and check does substring contains str[end]
      end++;
      // if not, check current length of substring + str[end] and set value of maxLength if it is bigger
      maxLength = Math.max(maxLength, end - start && end - start);
    } else {
      // otherwise, increment start until str[end] is uniq
      start++;
    }
  }

  return maxLength;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6

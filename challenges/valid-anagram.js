/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase or name formed by rewordanging the letters of another, such as cinema, formed from iceman
 */

/**
 * Problem solving steps:
 * 1. Restate task:
 * - Create a function which accepts two string values and compares them to find out
 * does second string consists from the same amount of letters with same frequency
 * - Second string must have same length as first one
 * 2. Inputs:
 * - firstWord
 * - secondWord
 * 3. Outputs:
 * - true (if anagram) or false (if not)
 * 4. Can outputs be determined from the inputs:
 * - What should function return if one or both of the values are empty? If both are empty then true
 * - Can casing of the inputs be different? Nope, only lowercase
 * - Can string contains special characters or spaces? Nope, only alphabetical characters
 * 5. Naming of the important pieces:
 * - frequencyCounter
 */

/**
 * Explore concrete examples:
 * 1. Write down 2-3 simple examples
 * - validAnagram('test', 'tsat') // false
 * - validAnagram('example', 'aplemex') // true
 * 2. Complex examples
 * 3. Edge cases (empty inputs)
 * - validAnagram('', '') // true
 * - same(null, 'anagram') => false
 * 4. Invalid inputs
 */

/**
 * Break it down
 */
// const validAnagram = (word1, word2) => {
// check inputs validity, if one of inputs is not valid - return false
// check inputs length, if not the same - return false
// check inputs for equality, if same - return true
// create frequencyCounter
// iterate over first string
// store in frequencyCounter each character as key with value of 1
// if key is already presented, then increment its value by 1
// iterate over second word
// try to get character counter from frequencyCounter, if non or less then 1, return false
// otherwise, decrement character counter
// iterate over frequencyCounter values
// if some key is greater then 0, return false, otherwise true
// };

const validAnagram = (word1, word2) => {
  // check inputs validity, if one of inputs is not valid - return false
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    return false;
  }

  // check inputs length, if not the same - return false
  if (word1.length !== word2.length) {
    return false;
  }

  // check inputs for equality, if same - return true
  if (word1 === word2) {
    return true;
  }

  // create frequencyCounter
  const frequencyCounter = {};

  // iterate over first word
  for (const char of word1) {
    // store in frequencyCounter each character as key with value of 1
    // if key is already presented, then increment its value by 1
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  // iterate over second word
  for (const char of word2) {
    // try to get character counter from frequencyCounter, if non or less falsy (for ex: 0), return false
    // otherwise, decrement character counter
    if (!frequencyCounter[char]) {
      return false;
    }

    // decrement frequencyCounter
    frequencyCounter[char]--;
  }

  return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('eastwood', 'doowet')); // false
console.log(validAnagram('eastwood', 'dotowas')); // false
console.log(validAnagram('eastwood', 'odetowas')); // true
console.log(validAnagram('eastwood', 'doesawto')); // true
console.log(validAnagram('eastwood', 'odesawto')); // true
console.log(validAnagram('eastwood', 'dotoewas')); // true
console.log(validAnagram('eastwood', 'dosatoe')); // false
console.log(validAnagram('eastwood', 'sdoetw')); // false
console.log(validAnagram('eastwood', 'asdoetw')); // false
console.log(validAnagram('eastwood', 'asodetwo')); // true
console.log(validAnagram('eastwood', 'asodetow')); // true
console.log(validAnagram('eastwood', 'astoowed')); // true
console.log(validAnagram('eastwood', 'asdewtoo')); // true
console.log(validAnagram('eastwood', 'asdotw')); // false
console.log(validAnagram('eastwood', 'asdotowe')); // true
console.log(validAnagram('eastwood', 'doesowta')); // true
console.log(validAnagram('eastwood', 'odewta')); // false
console.log(validAnagram('eastwood', 'atdoesow')); // true

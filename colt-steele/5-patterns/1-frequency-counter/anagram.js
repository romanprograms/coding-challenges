/*
 * Frequency Counter Pattern 
 *
 * This pattern uses objects or sets to collect values/frequencies of values. 
 * This can often avoid the need for nested or O(N^2) operations with
 * arrays / strings. 
 */

/*
Given two strings, write a function to determine if the second string
 is an anagram of the first. An anagram is a word, phrase, or name formed by
 rearranging the letters of another, such as cinema, formed from iceman
*/

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm')); // false
console.log(validAnagram('', '')); // true
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

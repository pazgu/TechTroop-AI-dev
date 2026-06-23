// #19
// Given a string, return the first character that appears only once.
// If no such character exists, return null.
//
// Constraints: the string will only contain lowercase letters.
// The string will always have at least one character.
//
// Input:  "leetcode"   →  Output: "l"
// Input:  "aabb"       →  Output: null
// Input:  "aabbc"      →  Output: "c"

function firstNonRepeating(str) {
  const appearence = {};
  for (let ch of str) {
    if (!appearence[ch]) {
      appearence[ch] = 1;
    } else {
      appearence[ch] += 1;
    }
  }
  for (let ch of str) {
    if (appearence[ch] === 1) {
      return ch;
    }
  }
  return null;
}

// Tests
console.log(firstNonRepeating("leetcode")); // → "l"
console.log(firstNonRepeating("aabb")); // → null
console.log(firstNonRepeating("aabbc")); // → "c"

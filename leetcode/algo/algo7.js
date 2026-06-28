// #7
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function isAnagram(a, b) {
  const occur = {};

  if (a.length !== b.length) return false;

  for (let ch of a) {
    occur[ch] = (occur[ch] || 0) + 1;
  }

  for (let ch of b) {
    if (!occur[ch]) {
      return false;
    }
    occur[ch] -= 1;
  }

  return true;
}

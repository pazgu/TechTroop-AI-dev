// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.
// As the window slides forward, what character leaves and what enters?
//
// Input:  "abciiidef", K=3  →  Output: 3  ("iii")
// Input:  "aeiou",     K=2  →  Output: 2  ("ae", "ei", "io", "ou" all have 2)
// Input:  "leetcode",  K=3  →  Output: 2  ("lee", "eet", "ode")

//brute force
function maxVowels(str, k) {
  let left = 0;
  let right = str.length - 1;
  let maxVowels = 0;
  let countVowels = 0;

  while (left <= right - k + 1) {
    countVowels = 0;

    for (let i = left; i < left + k; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        countVowels++;
      }
    }
    if (countVowels > maxVowels) {
      maxVowels = countVowels;
    }
    left += 1;
  }
  return maxVowels;
}

//sliding window
function isVowel(char) {
  return (
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
  );
}

function maxVowels(str, k) {
  let countVowels = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(str[i])) {
      countVowels++;
    }
  }

  let maxVowels = countVowels;

  for (let i = k; i < str.length; i++) {
    if (isVowel(str[i])) {
      countVowels++;
    }

    if (isVowel(str[i - k])) {
      countVowels--;
    }

    if (countVowels > maxVowels) {
      maxVowels = countVowels;
    }
  }

  return maxVowels;
}

// Tests
console.log(maxVowels("abciiidef", 3)); // → 3
console.log(maxVowels("aeiou", 2)); // → 2
console.log(maxVowels("leetcode", 3)); // → 2

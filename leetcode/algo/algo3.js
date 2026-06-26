//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

// O(n) - time, O(1) - space
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch.toLowerCase())) {
      count++;
    }
  }
  return count;
}

// solution with set
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let ch of str) {
    if (vowels.has(ch.toLowerCase())) {
      count++;
    }
  }
  return count;
}

//solution with reduce
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return str.split("").reduce((count, ch) => {
    return vowels.has(ch.toLowerCase()) ? count + 1 : 0;
  }, 0);
}

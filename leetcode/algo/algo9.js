// #9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox is"  →  Output: "is fox brown quick the"
// Input:  "one"                  →  Output: "one"

function reverseWords(str) {
  const arr = str.split(" ");
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 1) return arr.join(" ");
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
  return arr.join(" ");
}

function reverseWords(str) {
  const arr = str.split(" ");
  const reversved = [];
  if (arr.length === 1) return arr.join(" ");
  for (let i = arr.length - 1; i > 0; i--) {
    reversved.push(arr[i]);
  }
  return reversved.join(" ");
}

// Tests
console.log(reverseWords("hello world")); // → "world hello"
console.log(reverseWords("the quick brown fox")); // → "fox brown quick the"
console.log(reverseWords("one")); // → "one"

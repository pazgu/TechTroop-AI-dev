// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

function longestWord(str) {
  const arr = str.split(" ");
  let longest = arr[0];
  for (let i = 1; i < words.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i];
    }
  }
  return longest;
}

// with reduce
function longestWord(str) {
  return str.split(" ").reduce((longest, current) => {
    return currect > longest ? current : longest;
  });
}

// with max
function longestWord(str) {
  const arr = str.split(" ");
  const arrlength = arr.map((word) => word.length);
  const max = Math.max(...arrlength);

  return arr.find((word) => word.length === max);
}

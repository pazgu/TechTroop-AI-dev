// #5
//Given an array of integers, return the element that appears
// most frequently. If there is a tie, return the one that appears
// first in the array.
//
// Constraints: the array will always have at least one element.
//
// Hint: think about how you can count occurrences of each element
// as you loop through, then find the highest count.
//
// Input:  [1, 2, 2, 3, 3, 3]  →  Output: 3
// Input:  [5, 1, 5, 2, 1, 5]  →  Output: 5
// Input:  [4, 4, 2, 2, 1]     →  Output: 4  (tie → first one wins)

function mostFrequent(arr) {
  const frequencies = {};
  let maxV = -Infinity;
  let maxNum = arr[0];

  for (let num of arr) {
    frequencies[num] = (frequencies[num] || 0) + 1;

    if (frequencies[num] > maxV) {
      maxV = frequencies[num];
      maxNum = num;
    }
  }
  return Number(maxNum);
}

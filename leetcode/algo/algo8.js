// #8
// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

function findPairs(arr, target) {
  const output = [];
  const x = new Set();
  for (let num of arr) {
    if (x.has(target - num)) {
      output.push([num, target - num]);
      x.delete(target - num);
    } else {
      x.add(num);
    }
  }

  return output;
}

function findPairs(arr, target) {
  const duplicates = [];

  const sortedArr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === target) {
      if (left === 0 || sortedArr[left] !== sortedArr[left - 1]) {
        duplicates.push([sortedArr[left], sortedArr[right]]);
      }
      left += 1;
      right -= 1;
    } else if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return duplicates;
}

function findPairsTwoPointers(arr, target) {
  const output = [];
  const sorted = [...arr].sort((a, b) => a - b);

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const sum = sorted[left] + sorted[right];

    if (sum === target) {
      output.push([sorted[left], sorted[right]]);

      // מניעת זוגות כפולים: נדלג על מספרים זהים בצד שמאל ובצד ימין
      while (left < right && sorted[left] === sorted[left + 1]) left++;
      while (left < right && sorted[right] === sorted[right - 1]) right--;

      left++;
      right--;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return output;
}

// Tests
console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
console.log(findPairs([1, 1, 2, 3, 3], 4)); // → [[1,3]]
console.log(findPairs([0, -1, 2, -3], -1)); // → [[0,-1], [2,-3]]

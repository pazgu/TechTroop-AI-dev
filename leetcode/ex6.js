// #15
// Given an array of integers and a number K, find the maximum sum
// of any K consecutive elements in the array.
//
// Constraints: K will always be less than or equal to the array length.
// The array will contain at least K elements.
//
// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4

//BRUTE FORCE
function maxSumSubarray(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

//SLIDING WINDOW
function maxSumSubarray(arr, k) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}

// another way to implement the sliding window approach
function maxSumSubarray(arr, k) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Tests
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // → 9
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); // → 9
console.log(maxSumSubarray([4, 4, 4, 4], 1)); // → 4

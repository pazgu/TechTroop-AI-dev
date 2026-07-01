// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])
// Input:  [1, 2, 3]           →  Output: 3  (no duplicates, unchanged)

// using 2 pointers + for loop - O(n)
function removeDuplicates(arr) {
  let x = 0;
  if (arr.length <= 1) return arr.length;

  for (let y = 1; y < arr.length; y++) {
    if (arr[x] !== arr[y]) {
      x += 1;
      arr[x] = arr[y];
    }
  }
  arr.length = x + 1;
  return arr.length;
}

//using 2 pointers - O(n^2) time
function removeDuplicates(arr) {
  let x = 0;
  let y = 1;
  if (arr.length === 1) return 1;
  while (y < arr.length) {
    if (arr[x] !== arr[y]) {
      x += 1;
      y += 1;
    } else {
      arr.splice(x, 1);
    }
  }
  return arr.length;
}

// using object;
function removeDuplicates(arr) {
  const uniq = {};
  for (let num of arr) {
    uniq[num] = (uniq[num] || 0) + 1;
  }
  return Object.keys(uniq).length;
}

//using set
function removeDuplicates(arr) {
  const x = [...new Set(arr)];
  return x.length;
}

// Tests
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // → 4
console.log(removeDuplicates([1, 1, 1, 1])); // → 1
console.log(removeDuplicates([1, 2, 3])); // → 3
console.log(removeDuplicates([1, 1, 2, 2, 3])); // → 3

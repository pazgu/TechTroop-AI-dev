// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]
// Input:  [1, 2, 3],    [4, 5, 6]        →  Output: []

//one set
function intersection(arr1, arr2) {
  const set1 = new Set([...arr1]);
  const result = [];
  for (num of arr2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }
  return [...result];
}

//one object
function intersectionWithMap(arr1, arr2) {
  const seen = {};
  const result = [];

  for (const num of arr1) {
    seen[num] = true;
  }

  for (const num of arr2) {
    if (seen[num] === true) {
      result.push(num);
      seen[num] = false;
    }
  }

  return result;
}

//2 pointers - O(n log n)
function intersectionTwoPointers(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  const result = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[p1]) {
        result.push(arr1[p1]);
      }
      p1++;
      p2++;
    } else {
      if (arr[p1] < arr[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
  }
}

// 2 sets
function intersection(arr1, arr2) {
  const set1 = new Set([...arr1]);
  const set2 = new Set([...arr2]);
  const result = [];
  for (num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  return [...result];
}

function intersection(arr1, arr2) {
  const duplicates = {};
  const output = [];
  for (let num of arr1) {
    duplicates[num] = (duplicates[num] || 0) + 1;
  }
  const set2 = new Set([...arr2]);
  for (let num of set2) {
    if (duplicates[num]) {
      output.push(num);
    }
  }
  return output;
}

//with 2 sets
function intersection(arr1, arr2) {
  const set1 = new Set([...arr1]);
  const set2 = new Set([...arr2]);
  const result = set1.intersection(set2);
  return [...result];
}

// Tests
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // → [3, 4]
console.log(intersection([1, 1, 2, 3], [1, 2, 2])); // → [1, 2]
console.log(intersection([1, 2, 3], [4, 5, 6])); // → []

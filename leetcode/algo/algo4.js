// #4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
// Input:  [1, 2, 3, 4, 5]  →  Output: 2  (4 and 5 are above average 3)
// Input:  [10, 10, 10, 20] →  Output: 1  (only 20 is above average 12.5)

function countAboveAverage(arr) {
  const avg = arr.reduce((sumT, num) => sumT + num, 0) / arr.length;
  let count = 0;
  for (let num of arr) {
    return num > avg ? count++ : 0;
  }
}

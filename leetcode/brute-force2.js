//sum to the target - brute force solution
//O(n^2) time complexity, O(1) space complexity

function twoSumBruteForce(arr, target) { 
    for (let i = 0; i < arr.length-1; i++) { //one less than length to avoid out of bounds and one less iteration
        for (let j = i + 1; j < arr.length; j++) { //start from i + 1 to avoid repeating pairs and self-pairing
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }   return false;
}

//better solution: O(n log n) time complexity, O(n) space complexity with sort and two pointers

function twoSumTwoPointers(arr, target) {
    arr.sort((a, b) => a - b); //O(n log n) time complexity
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

//better solution: O(n) time complexity, O(n) space complexity with hash set

function twoSumHashSet(arr, target) {   
    const seen = new Set();
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }    return false;
}
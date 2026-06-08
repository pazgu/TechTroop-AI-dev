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
//O(n^2) time complexity, O(n) space complexity
function printDuplicatesBruteForce(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }   console.log(duplicates);
}

//better solution: O(n log n) time complexity with sort

function printDuplicatesSort(arr) {
    const duplicates = [];
    arr.sort((a, b) => a - b); //O(n log n) time complexity
    for (let i = 1; i < arr.length; i++) { //O(n) time complexity
        if (arr[i] === arr[i - 1] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }   console.log(duplicates);
}
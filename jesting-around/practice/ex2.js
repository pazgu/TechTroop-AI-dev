//should remove at least one element from the array `arr`
const removeAtLeastOne = function(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
}

module.exports = removeAtLeastOne;
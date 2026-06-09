const add = function(a, b){
    return a + b
}

const calculateHyp = function(a, b){
    return Math.sqrt(a*a + b*b)
}

const clearLowPriority = function(){
    return items.filter(item => item.priority === "HIGH");
}

const convertArraysToObject = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "Arrays must be of equal length";
    }   
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i]] = arr2[i];
    }
    return result;
}

module.exports = {
    add,
    calculateHyp,
    clearLowPriority,
    convertArraysToObject
}
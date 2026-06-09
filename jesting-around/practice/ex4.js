const validate = function(arr) {
  if (arr.length === 0) {
    return { error: "Need at least one boolean" };
  }

  let trueCount = 0;
  let falseCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      if (arr[i] === true) {
        trueCount++;
      } else {
        falseCount++;
      }
    }
  }
  return trueCount > falseCount;
}

module.exports = validate;
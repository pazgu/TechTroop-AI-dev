const removeAtLeastOne = require('./ex2'); 

describe('removeAtLeastOne', () => {
  test('should reduce the array length by at least one element', () => {
    const originalArray = ['apple', 'banana', 'cherry', 'date'];
    const originalLength = originalArray.length; 

    const resultArray = removeAtLeastOne(originalArray);

    expect(resultArray.length).toBeLessThan(originalLength);
    expect(resultArray.length).toBeGreaterThanOrEqual(1);
  });

  test('should handle edge-case arrays with 0 or 1 elements safely', () => {
  expect(removeAtLeastOne([])).toEqual([]);
  expect(removeAtLeastOne(['only-item'])).toEqual([]);

  })
});
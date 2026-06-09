const isEven = require('./ex1');

describe('isEven', () => {
  test('should return true if n is even', () => {
    const result = isEven(4);
    expect(result).toBeTruthy(); 
  });

  test('should return false if n is odd', () => {
    const result = isEven(7);
    expect(result).toBeFalsy();
  });

  test('should return false if the parameter is not a number, or is null/undefined', () => {
  expect(isEven("hello")).toBeFalsy();
  expect(isEven(null)).toBeFalsy();
  expect(isEven()).toBeFalsy(); 
});

});
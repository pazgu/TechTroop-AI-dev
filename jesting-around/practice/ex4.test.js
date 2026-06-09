const validate = require('./ex4'); 

describe('validate', () => {

  test('should return an error object if the array is empty', () => {
    const result = validate([]);
    expect(result).toEqual({ error: "Need at least one boolean" });
  });

  test('should return true if there are more true values than false values', () => {
    const input = [true, false, true]; 
    const result = validate(input);
    expect(result).toBe(true); 
  });

  test('should return false if there are equal or more false values than true values', () => {
    const equalInput = [true, false]; 
    const moreFalseInput = [true, false, false]; 
    
    expect(validate(equalInput)).toBe(false);
    expect(validate(moreFalseInput)).toBe(false);
  });

  test('should return the error object if the array has items, but NONE of them are booleans', () => {
  const badInput = ["true", 1, 0, "hello"]; 
  const result = validate(badInput);
  
  expect(result).toEqual({ error: "Need at least one boolean" });
});

});
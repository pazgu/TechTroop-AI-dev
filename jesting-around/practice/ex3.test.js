const simplify = require('./ex3'); 

describe('simplify', () => {

  test('should remove all forbidden symbols (!, #, ., ,, \') from the string', () => {
    const dirtyString = "Hello! This# is, a text. With' symbols.";
    
    const result = simplify(dirtyString);

    expect(result).toBe("Hello This is a text With symbols");
  });

  test('should return the same string if it contains no forbidden symbols', () => {
    const cleanString = "Hello World 123";
    const result = simplify(cleanString);
    
    expect(result).toBe("Hello World 123");
  });

  test('should return an empty string if input contains only forbidden symbols', () => {
    const onlySymbols = "!#.,'";
    const result = simplify(onlySymbols);
    
    expect(result).toBe("");
  });

  test('should return an empty string or handle non-string types safely', () => {
  expect(simplify()).toBe(""); 
  expect(simplify(null)).toBe("");
  expect(simplify(123)).toBe("123"); 
});

});
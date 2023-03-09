const multiply = require('./multiply');

test('multiply 3 and 14 to equal 42', () => {
  expect(multiply(3, 14)).toBe(42);
});
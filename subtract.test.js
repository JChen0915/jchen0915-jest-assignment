const subtract = require('./subtract');

test('subtracts 2 from 3 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});
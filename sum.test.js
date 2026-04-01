const { addTwoNumbers, subtractTwoNumbers } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtractTwoNumbers(5, 2)).toBe(3);
});
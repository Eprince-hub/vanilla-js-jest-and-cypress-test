const {
  addition,
  multiplication,
  subtraction,
  division,
} = require('./index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('multiplies 1 * 2 to equal 2', () => {
  expect(multiplication(1, 2)).toBe(2);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(subtraction(1, 2)).toBe(-1);
});

test('divides 1 / 2 to equal 0.5', () => {
  expect(division(1, 2)).toBe(0.5);
});

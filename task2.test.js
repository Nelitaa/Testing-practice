const reverseString = require('./task2.js');

test('reverse string', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
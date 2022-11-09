const capitalize = require('./task4.js');

test('first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});
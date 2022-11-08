const stringLength = require('./task1');

test('string length', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('short string length', () => {
  expect(stringLength('')).toBe('Error');
});

test('long string length', () => {
  expect(stringLength('HelloWorldMyNameIs')).toBe('Error');
});

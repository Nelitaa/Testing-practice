let calculator = require('./task3');

describe('calculator sum', () => {
  test('sum positive numbers', () => {
      let newCalculator = new calculator(10, 2);
      expect(newCalculator.add()).toBe(12);
  });
  test('sum negative numbers', () => {
    let newCalculator = new calculator(-10, -2);
    expect(newCalculator.add()).toBe(-12);
  });
  test('sum positive number plus zero', () => {
    let newCalculator = new calculator(10, 0);
    expect(newCalculator.add()).toBe(10);
  });
});

describe('calculator subtract', () => {
  test('subtract positive numbers', () => {
      let newCalculator = new calculator(10, 2);
      expect(newCalculator.subtract()).toBe(8);
  });
  test('subtract negative numbers', () => {
    let newCalculator = new calculator(-10, -2);
    expect(newCalculator.subtract()).toBe(-8);
  });
  test('subtract negative number and zero', () => {
    let newCalculator = new calculator(-10, 0);
    expect(newCalculator.subtract()).toBe(-10);
  });
});

describe('calculator multiply', () => {
  test('multiply positive numbers', () => {
      let newCalculator = new calculator(10, 2);
      expect(newCalculator.multiply()).toBe(20);
  });
  test('multiply negative numbers', () => {
    let newCalculator = new calculator(-10, -2);
    expect(newCalculator.multiply()).toBe(20);
  });
  test('multiply negative number and zero', () => {
    let newCalculator = new calculator(-10, 0);
    expect(newCalculator.multiply()).toBe(0);
  });
});

describe('calculator divide', () => {
  test('divide positive numbers', () => {
      let newCalculator = new calculator(10, 2);
      expect(newCalculator.divide()).toBe(5);
  });
  test('divide negative numbers', () => {
    let newCalculator = new calculator(-10, -2);
    expect(newCalculator.divide()).toBe(5);
  });
  test('divide negative number and zero', () => {
    let newCalculator = new calculator(-10, 0);
    expect(newCalculator.divide()).toBe('It is not possible to divide by zero');
  });
});
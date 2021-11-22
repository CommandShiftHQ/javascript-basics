const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
} = require('../numbers');

describe('add', () => {
  it('adds the two numbers together', () => {
    expect(add(2, 1)).toEqual(3);
    expect(add(15, 76)).toEqual(91);
    expect(add(12, 0)).toEqual(12);
    expect(add(10, -5)).toEqual(5);
  });
});

describe('subtract', () => {
  it('subtracts the second number from the first', () => {
    expect(subtract(2, 1)).toEqual(1);
    expect(subtract(1, 2)).toEqual(-1);
    expect(subtract(-2, 1)).toEqual(-3);
    expect(subtract(1, -2)).toEqual(3);
    expect(subtract(-1, -1)).toEqual(0);
  });
});

describe('multiply', () => {
  xit('multiplies the two numbers together', () => {
    expect(multiply(10, 3)).toEqual(30);
    expect(multiply(-11, 5)).toEqual(-55);
    expect(multiply(-4, -9)).toEqual(36);
  });
});

describe('divide', () => {
  xit('divides the first number by the second number', () => {
    expect(divide(20, 5)).toEqual(4);
    expect(divide(5, 2)).toEqual(2.5);
    expect(divide(2, 5)).toEqual(0.4);
    expect(divide(10, 3)).toBeCloseTo(3.33);
  });
});

describe('power', () => {
  xit('returns the first number to the power of the second', () => {
    expect(power(5, 2)).toEqual(25);
    expect(power(2, 3)).toEqual(8);
    expect(power(10, 5)).toEqual(100000);
  });
});

describe('round', () => {
  xit('rounds the number to the nearest integer', () => {
    expect(round(2.1)).toEqual(2);
    expect(round(9.7)).toEqual(10);
    expect(round(5.5)).toEqual(6);
  });
});

describe('roundUp', () => {
  xit('rounds the number up to the nearest integer', () => {
    expect(roundUp(2.1)).toEqual(3);
    expect(roundUp(9.7)).toEqual(10);
    expect(roundUp(5.5)).toEqual(6);
  });
});

describe('roundDown', () => {
  xit('rounds the number down to the nearest integer', () => {
    expect(roundDown(2.1)).toEqual(2);
    expect(roundDown(9.7)).toEqual(9);
    expect(roundDown(5.5)).toEqual(5);
  });
});

describe('absolute', () => {
  xit('returns the absolute value of the number', () => {
    expect(absolute(-1)).toEqual(1);
    expect(absolute(1)).toEqual(1);
    expect(absolute(0)).toEqual(0);
  });
});

describe('quotient', () => {
  // N.B. quotient of two numbers is the integer given by dividing
  // the first by the second, without the remainder
  // 18 divided by 7 is 2 remainder 4 (or 2.571...)
  // so the quotient of 18 and 7 is 2
  xit('returns the quotient from dividing the first number by the second number', () => {
    expect(quotient(10, 3)).toEqual(3);
    expect(quotient(18, 7)).toEqual(2);
    expect(quotient(77, 10)).toEqual(7);
    expect(quotient(-9, 2)).toEqual(-4);
  });
});

describe('remainder', () => {
  xit('returns the remainder when dividing the first number by the second number', () => {
    expect(remainder(10, 3)).toEqual(1);
    expect(remainder(18, 7)).toEqual(4);
    expect(remainder(77, 10)).toEqual(7);
    expect(remainder(-9, 2)).toEqual(-1);
  });
});

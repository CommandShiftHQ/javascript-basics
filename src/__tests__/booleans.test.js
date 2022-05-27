const {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
} = require('../booleans');

describe('negate', () => {
  it('returns the opposite of the passed boolean value', () => {
    expect(negate(true)).toBe(false);
    expect(negate(false)).toBe(true);
  });
});

describe('both', () => {
  xit('returns true if both of the given booleans are true', () => {
    expect(both(true, true)).toBe(true);
    expect(both(true, false)).toBe(false);
    expect(both(false, true)).toBe(false);
    expect(both(false, false)).toBe(false);
  });
});

describe('either', () => {
  xit('returns true if at least one of the given booleans are true', () => {
    expect(either(true, true)).toBe(true);
    expect(either(true, false)).toBe(true);
    expect(either(false, true)).toBe(true);
    expect(either(false, false)).toBe(false);
  });
});

describe('none', () => {
  xit('returns true if neither of the given booleans are true', () => {
    expect(none(true, true)).toBe(false);
    expect(none(true, false)).toBe(false);
    expect(none(false, true)).toBe(false);
    expect(none(false, false)).toBe(true);
  });
});

describe('one', () => {
  xit('returns true if exactly one of the given booleans are true', () => {
    expect(one(true, true)).toBe(false);
    expect(one(true, false)).toBe(true);
    expect(one(false, true)).toBe(true);
    expect(one(false, false)).toBe(false);
  });
});

describe('truthiness', () => {
  xit('returns the truthiness of the given value', () => {
    expect(truthiness('')).toBe(false);
    expect(truthiness('dbbd')).toBe(true);
    expect(truthiness(0)).toBe(false);
    expect(truthiness(3)).toBe(true);
    expect(truthiness([])).toBe(true);
    expect(truthiness({})).toBe(true);
    expect(truthiness(null)).toBe(false);
    expect(truthiness(undefined)).toBe(false);
    expect(truthiness(NaN)).toBe(false);
  });
});

describe('isEqual', () => {
  xit('returns whether the two values are equal', () => {
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual('true', 'true')).toBe(true);
    expect(isEqual('true', 'false')).toBe(false);
    expect(isEqual(10, 0)).toBe(false);
    expect(isEqual(10, 10)).toBe(true);
    expect(isEqual(10, '10')).toBe(false);
  });
});

describe('isGreaterThan', () => {
  xit('returns true if the first number is strictly greater than the second', () => {
    expect(isGreaterThan(1, 2)).toBe(false);
    expect(isGreaterThan(3, 2)).toBe(true);
    expect(isGreaterThan(4, 4)).toBe(false);
    expect(isGreaterThan(-3, 4)).toBe(false);
    expect(isGreaterThan(4, -3)).toBe(true);
    expect(isGreaterThan(0, 1)).toBe(false);
    expect(isGreaterThan(1, 0)).toBe(true);
  });
});

describe('isLessThanOrEqualTo', () => {
  xit('returns true if the first number is less than or equal to the second', () => {
    expect(isLessThanOrEqualTo(1, 2)).toBe(true);
    expect(isLessThanOrEqualTo(3, 2)).toBe(false);
    expect(isLessThanOrEqualTo(4, 4)).toBe(true);
    expect(isLessThanOrEqualTo(0, 4)).toBe(true);
    expect(isLessThanOrEqualTo(-1, 0)).toBe(true);
  });
});

describe('isOdd', () => {
  xit('returns whether the number is odd', () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(8)).toBe(false);
  });
});

describe('isEven', () => {
  xit('returns whether the number is even', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(8)).toBe(true);
  });
});

describe('isSquare', () => {
  xit('returns true if the number is a square', () => {
    expect(isSquare(9)).toEqual(true);
    expect(isSquare(4)).toEqual(true);
    expect(isSquare(5)).toEqual(false);
    expect(isSquare(-4)).toEqual(false);
    expect(isSquare(0)).toEqual(true);
  });
});

describe('startsWith', () => {
  xit('returns whether the given string starts with the given character', () => {
    expect(startsWith('a', 'aardvark')).toBe(true);
    expect(startsWith('c', 'aardvark')).toBe(false);
    expect(startsWith('b', 'baardvark')).toBe(true);
    expect(startsWith('a', 'qaardvark')).toBe(false);
    expect(startsWith('a', 'Aardvark')).toBe(false);
  });
});

describe('containsVowels', () => {
  xit('returns whether the given string contains vowels', () => {
    expect(containsVowels('cat')).toBe(true);
    expect(containsVowels('DOG')).toBe(true);
    expect(containsVowels('why')).toBe(false);
  });
});

describe('isLowerCase', () => {
  xit('it returns true if the given string is lowercase', () => {
    expect(isLowerCase('abc')).toBe(true);
    expect(isLowerCase('abc213')).toBe(true);
    expect(isLowerCase('Abc')).toBe(false);
  });
});

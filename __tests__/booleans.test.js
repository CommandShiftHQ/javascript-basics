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
  isLowerCase,
} = require('../src/booleans');

describe('negate', () => {
  it('returns the opposite of the passed boolean value', () => {
    expect(negate(true)).toBe(false);
    expect(negate(false)).toBe(true);
  });
});

describe('both', () => {
  it('returns true if both of the given values are true', () => {
    expect(both(true, true)).toBe(true);
    expect(both(true, false)).toBe(false);
    expect(both(false, true)).toBe(false);
    expect(both(false, false)).toBe(false);
  });
});

describe('either', () => {
  it('returns true if at least one of the given values are true', () => {
    expect(either(true, true)).toBe(true);
    expect(either(true, false)).toBe(true);
    expect(either(false, true)).toBe(true);
    expect(either(false, false)).toBe(false);
  });
});

describe('none', () => {
  it('returns true if neither of the given values are true', () => {
    expect(none(true, true)).toBe(false);
    expect(none(true, false)).toBe(false);
    expect(none(false, true)).toBe(false);
    expect(none(false, false)).toBe(true);
  });
});

describe('one', () => {
  it('returns true if exactly one of the given values are true', () => {
    expect(one(true, true)).toBe(false);
    expect(one(true, false)).toBe(true);
    expect(one(false, true)).toBe(true);
    expect(one(false, false)).toBe(false);
  });
});

describe('truthiness', () => {
  it('returns the truthiness of the given value', () => {
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
  it('returns whether the two values are even', () => {
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual('true', 'true')).toBe(true);
    expect(isEqual('true', 'false')).toBe(false);
    expect(isEqual(10, 0)).toBe(false);
    expect(isEqual(10, 10)).toBe(true);
  });
});

describe('isGreaterThan', () => {
  it('returns true if the first number is strictly greater than the second', () => {
    expect(isGreaterThan(1, 2)).toBe(false);
    expect(isGreaterThan(3, 2)).toBe(true);
    expect(isGreaterThan(4, 4)).toBe(false);
  });
});

describe('isLessThanOrEqualTo', () => {
  it('returns true if the first number is less than or equal to the second', () => {
    expect(isLessThanOrEqualTo(1, 2)).toBe(true);
    expect(isLessThanOrEqualTo(3, 2)).toBe(false);
    expect(isLessThanOrEqualTo(4, 4)).toBe(true);
  });
});

describe('isOdd', () => {
  it('returns whether the number is odd', () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(8)).toBe(false);
  });
});

describe('isEven', () => {
  it('returns whether the number is even', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(8)).toBe(true);
  });
});

describe('isSquare', () => {
  it('returns true if the number is a square', () => {
    expect(isSquare(9)).toEqual(true);
    expect(isSquare(5)).toEqual(false);
    expect(isSquare(-4)).toEqual(false);
    expect(isSquare(0)).toEqual(true);
  });
});

describe('startsWith', () => {
  it('returns whether the given string starts with the given character', () => {
    expect(startsWith('a', 'aardvark')).toBe(true);
    expect(startsWith('a', 'qaardvark')).toBe(false);
    expect(startsWith('a', 'Aardvark')).toBe(false);
  });
});

describe('containsVowels', () => {
  it('returns whether the given string contains vowels', () => {
    expect(containsVowels('cat')).toBe(true);
    expect(containsVowels('DOG')).toBe(true);
    expect(containsVowels('why')).toBe(false);
  });
});

describe('isLowerCase', () => {
  it('it returns true if the given string is lowercase', () => {
    expect(isLowerCase('abc')).toBe(true);
    expect(isLowerCase('abc213')).toBe(true);
    expect(isLowerCase('Abc')).toBe(false);
  });
});

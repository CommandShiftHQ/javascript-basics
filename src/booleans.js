const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => {
  if (a && !b) return true;
  if (!a && b) return true;
  return false;
};

const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => !(a % 2 === 0);

const isEven = a => a % 2 === 0;

const isSquare = a => Math.sqrt(a) % 1 === 0;

const startsWith = (char, string) => string.startsWith(char);

const containsVowels = string => Boolean(string.match(/[aeiou]/gi));

const isLowerCase = string => string === string.toLowerCase();

module.exports = {
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
};

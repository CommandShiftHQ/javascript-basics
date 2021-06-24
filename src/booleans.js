const negate = a => !a;

const both = (a, b) => a && b === true;

const either = (a, b) => a || b === true;

const none = (a, b) => !(a && b === true);

const one = (a, b) => !a || b === true;

const truthiness = a => {
  // your code here
};

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a +1;

const isEven = a => {
  // your code here
};

const isSquare = a => Math.sqrt(a) % 1 === 0;

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = string => {
  // your code here
};

const isLowerCase = string => string.typeof()

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

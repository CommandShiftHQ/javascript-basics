const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return (a && !b) || (!a && b);
};

const truthiness = (a) => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  return !isEven(a); 
};

const isEven = (a) => {
  return a % 2 === 0;
};

const isSquare = (a) => {
  return 
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = (string) => {
  const lower = string.toLowerCase();
  return lower.includes('a') || lower.includes('e') || lower.includes('i') || lower.includes('u') || lower.includes('o');
};

const isLowerCase = (string) => {
  return string.toLowerCase() === string;
};

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
  isLowerCase,
};

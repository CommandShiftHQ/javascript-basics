const negate = (a) => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => (!a && !b);

const one = (a, b) => (!a !== !b);

const truthiness = (a) => (!!a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = (a) => a % 2 === 1;

const isEven = (a) => a % 2 === 0;

const isSquare = (a) => Math.sqrt(a) % 1 === 0;

const startsWith = (char, string) => string.startsWith(char);

const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (string.toLowerCase().includes(vowels[i])) {
      return true;
    }
  }
  return false;
};

const isLowerCase = (string) => string === string.toLowerCase();

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
}
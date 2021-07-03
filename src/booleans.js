const negate = a => {
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

const truthiness = a => {
  return a ? true : false;
};

// Tried an if statement for this, but can't figure out why it won't work:

// const truthiness = a => {
// if (a == true) {
//   return true;
// };
// return false;
// };

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};


const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0
};

const startsWith = (char, string) => {
  if (string.startsWith(char)) {
    return true;
  }
  return false;
};
// startsWith() only accepts a single character

const containsVowels = string => {
  if (string.match(/[aeiou]/i)) {
    return true;
  }
  return false;
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  };
  return false;
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
  isLowerCase
};

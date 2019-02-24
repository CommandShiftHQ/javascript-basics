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
  if (a && b) {
    return false;
  }
  if ((!a && b) || (a && !b)) {
    return true;
  }
  return false;
};

const truthiness = (a) => {
  if (a) {
    return true;
  }
  return false;
};

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

const isOdd = (a) => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
};

const containsVowels = (string) => {
  const lowerCaseString = string.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      return true;
    }
  }
  return false;
};

const isLowerCase = (string) => {
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === string[i].toLowerCase()) {
  //     return true;
  //   }
  //   return false;
  // }
  return (string === string.toLowerCase());
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

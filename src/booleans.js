const negate = (a) => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  // your code here
  if ((a === true) || (b === true)) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  // your code here
  if ((a !== true) && (b !== true)) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  // your code here
  if (a == !b) {
    return true;
  }
  return false;
};

const truthiness = (a) => {
  // your code here
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  // your code here
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = (a) => {
  // your code here
  if (a % 2 !== 0) {
    return true;
  }
  return false;
};

const isEven = (a) => {
  // your code here
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = (a) => {
  // your code here
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  // your code here
  if (string.startsWith(char, string)) {
    return true;
  }
  return false;
};

const containsVowels = (string) => {
  // your code here
  if(string.match(/[aeiouAEIOU]/)){
    return true;
  };
  return false;
};

const isLowerCase = (string) => {
  // your code here
  if ( string === string.toLowerCase()) {
    return true;
  }
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
  isLowerCase,
};
function newFunction() {
  return 0;
}

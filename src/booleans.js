const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return (a && b);
};

const either = (a, b) => {
  return (a || b);
};

const none = (a, b) => {
  return ( !a && !b );
};

const one = (a, b) => {
  if(a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
};

const truthiness = (a) => {
  if(a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => {
  if(a === b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if(a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if(a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = (a) => {
  if(a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

const isEven = (a) => {
  if(a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = (a) => {
    return a >= 0 && Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  if(char === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = (string) => {
  if(string.match(/[aeiou]/gi)) {
    return true;
  } else {
    return false;
  }

};

const isLowerCase = (string) => {
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
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
}

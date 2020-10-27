const negate = a => {
  if (a === true) {
    return false;
  } else {
    return true
  };
};

const both = (a, b) => {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if (a || b === true) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (a === false && b === false) {
    return true;
  } else {
    return false;
  }
};

const one = (a, b) => {
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  } else {
    return false;
  }
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i = 0; i < vowels.length; i += 1) {
    let trueResult = string.includes(vowels[i]);
    if (trueResult === true) {
      return true;
    }
  }
  return false;
}



const isLowerCase = string => {
 return string === string.toLowerCase();
}

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

function negate(a) {
  // your code here
  if (a) {
    return false;
  } else {
    return true;
  }
}

function both(a, b) {
  // your code here
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

function either(a, b) {
  // your code here
  if (a || b) {
    return true;
  } else {
    return false;
  }
}

function none(a, b) {
  // your code here
  if (a && b) {
    return false;
  } else if (a || b) {
    return false;
  } else {
    return true;
  }
}

function one(a, b) {
  // your code here
  if (a && b) {
    return false;
  } else if (a || b) {
    return true;
  } else {
    return false;
  }
}

function truthiness(a) {
  return !!a;
}

function isEqual(a, b) {
  // your code here
  if (a === b) return true;
  return false;
}

function isGreaterThan(a, b) {
  // your code here
  if (a > b) return true;
  return false;
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) return true;
  return false;
}

function isOdd(a) {
  // your code here
  if (a % 2 !== 0) return true;
  return false;
}

function isEven(a) {
  // your code here
  if (a % 2 === 0) return true;
  return false;
}

function isSquare(a) {
  // your code here
  if (a >= 0 && Math.sqrt(a) % 1 === 0) return true;
  return false;
}

function startsWith(char, string) {
  // your code here
  const text = string;
  const letter = text.charAt(0);
  if (char === letter) return true;
  return false;
}

function containsVowels(string) {
  // your code here
  let vowel = string;
  vowel = vowel.match(/[aeiouAEIOU]/gi);
  if (!!vowel) return true;
  return false;
}

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()) return true;
  return false;
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

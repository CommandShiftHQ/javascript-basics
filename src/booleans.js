const negate = (a) => {
  return 1 > a
};

const both = (a, b) => {
  return a > 0 && b > 0
};

const either = (a, b) => {
  return a > 0 || b > 0
};

const none = (a, b) => {
  if (a || b) {
    return false
  } else {
    return true
  }
};

const one = (a, b) => {
  if ((a !== b) && (a || b)) {
    return true 
  } else {
    return false
  }
};

const truthiness = (a) => {
  if (a) {
    return true
  } else {
    return false
  }
};

const isEqual = (a, b) => {
  return a === b
};

const isGreaterThan = (a, b) => {
  return a > b
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

const isOdd = (a) => {
  if (a % 2 === 0) {
    return false
  } else { return true}
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true
  } else { return false}};

const isSquare = (a) => {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  if (string.startsWith(char)) {return true
  } else {return false}
};

const containsVowels = (string) => {
  const vowelList = 'AEIOUaeiou';
  let vCount = 0;

  for (let x = 0; x < string.length; x++)
{
  if (vowelList.indexOf(string[x]) !== -1)
  {
    vCount ++
  }
}
return vCount > 0;

};

const isLowerCase = (string) => {
  return string === string.toLowerCase()
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

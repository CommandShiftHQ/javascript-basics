const negate = (a) => {
  return !a// your code here
};

const both = (a, b) => {
  return a&&b// your code here
};

const either = (a, b) => {
  return a||b// your code here
};

const none = (a, b) => {
  return !a&&!b// your code here
};

const one = (a, b) => {
  return (a||b) && !(a&&b) // your code here
};

const truthiness = (a) => {
  return !!a// your code here
};

const isEqual = (a, b) => {
  return a===b// your code here
};

const isGreaterThan = (a, b) => {
  return a>b// your code here
};

const isLessThanOrEqualTo = (a, b) => {
  return a<=b// your code here
};

const isOdd = (a) => {
  return (a%2) === 1// your code here
};

const isEven = (a) => {
  return (a%2) === 0// your code here
};

const isSquare = (a) => {
 return Math.sqrt(a)%1 === 0 // your code here
};

const startsWith = (char, string) => {
  return string.charAt(0) === char// your code here
};


const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if ( string.toLowerCase().includes(vowels[i]) ) {
      return true;
    }
}
  return false;
};

const isLowerCase = (string) => {
  return string === string.toLowerCase()// your code here
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

function negate(a) {
  return a= !a;
};

function both(a, b) {
  return a&&b;
};

function either(a, b) {
  return a||b;
};

function none(a, b) {
 return !a&&!b ;
};

function one(a, b) {
  return a===!b;
};

function truthiness(a) {
  return (!!a);
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a>b;
};

function isLessThanOrEqualTo(a, b) {
  return a<=b;
};

function isOdd(a) {
  return (a%2>0);
}

function isEven(a) {
  return (a%2===0);
};

function isSquare(a) {
    if (a>=0) {
      let sr = Math.sqrt(a);
      return((sr*sr)==a);
    }
  return false;
  }

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  const regex = /[aeiou]/gi
return regex.test(string);
};

function isLowerCase(string) {
 const regex= /([A-Z])/g
 return !regex.test(string);
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

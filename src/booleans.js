function negate(a) {
  return !a
 
};

function both(a, b) {
   if (a===true && b===true){
    return true;
   } else{
    return false;
   }
};

function either(a, b) {
  if (a || b){
    return true;
  }else{
    return false;
  }
};

function none(a, b) {
  if (a || b){
    return false;
  }else{
    return true;
  }
};

function one(a, b) {
if (a===true && b===true) {
  return false;
}
if (a!==true && b===true){
  return true;
}
if (a!==true && b!==true){
  return false;
}
if(a===true && b!==true){
  return true;
}

};

function truthiness(a) {
  if (true){
    return true;
  } else {
    return false;
  }
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 !== 0;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
 const sqrt = Math.sqrt(a);
 return sqrt === Math.floor(sqrt);
};

function startsWith(char, string) {
  return string.charAt(0) === char;
};

function containsVowels(string) {
  return /[aeiouAEIOU]/.test(string);
};

function isLowerCase(string) {
  return string === string.toLowerCase();
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

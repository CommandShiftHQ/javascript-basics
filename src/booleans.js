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
  // your code here
};

function isGreaterThan(a, b) {
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  // your code here
};

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
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

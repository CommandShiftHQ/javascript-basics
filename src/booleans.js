const negate = a => {
   if (a && a){
   return false
   }
   else 
   return true

};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
  
};

const none = (a, b) => {
 if (a === false && b === false){
 return true
 }
 else 
 return false
  
};

const one = (a, b) => {
  if (a === true && b === false){
  return true
  }
  else if (a !== true && b === true){
  return true
  }
  else 
  return false
};

const truthiness = a => {
 
  if(a) {
    return true; 
    }
    else {
    return false }
   
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

const isOdd = a => {
  return Math.abs(a % 2) == 1;
      
};

const isEven = a => {
  return Math.abs(a % 2) == 0;
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0;
  
};

const startsWith = (char, string) => {
      return (char, string.startsWith("a", "aardvark"))
};  

const containsVowels = string => { 
  if (string.match(/([aeiouAEIOU])\w+/g)) {
      return true;
    } else {
      return false;
    }

};

const isLowerCase = string => {
  if (string === string.toLowerCase()){
  return true;
  }
 else return false  
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

export const negate = (a) => {
  return a === false;
};

export const both = (a, b) => {
  if (a && b === true){
    return true;
  }else{
    return false;
  }
};

export const either = (a, b) => {
  if (a || b === true){
    return true;
  }else{
    return false;
  }
};

export const none = (a, b) => {
  if (a === false && b ===false){
    return true;
  }else{
    return false;
  }
};

export const one = (a, b) => {
  if (a !== b){
    return true;
  }else{
    return false;
  }
};

export const truthiness = (a) => {
 if (a){
   return true;
 }else{
   return false;
 }
};

export const isEqual = (a, b) => {
 if (a === b){
   return true;
 }else{
   return false;
 }
};

export const isGreaterThan = (a, b) => {
  if (a > b){
    return true;
  }else{
    return false;
  }
};

export const isLessThanOrEqualTo = (a, b) => {
  if (a <= b){
    return true;
  }else{
    return false;
  }
};

export const isOdd = (a) => {
  if (a % 2 !== 0){
    return true;
  }else{
    return false;
  }
};

export const isEven = (a) => {
  if (a % 2 === 0){
    return true;
  }else{
    return false;
  }
};

export const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0){
    return true;
  }else{
    return false;
  }
};

export const startsWith = (char, string) => {
  if (string.charAt(0) === char){
    return true;
  }else{
    return false;
  }
};

export const containsVowels = (string) => {
  let newString = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let containsVowel = false;
  for (let i = 0; i <= newString.length; i++ ){
   for (let j = 0; j<= vowels.length; j++){
     if (newString.charAt(i) === vowels[j]){
       containsVowel = true;
     }
   }
   
  }
  return containsVowel;
};

export const isLowerCase = (string) => {
  if (string !== string.lowercase && string[0].toUpperCase()!==string[0]){
    return true;
  }else{
    return false;
  }
};
  

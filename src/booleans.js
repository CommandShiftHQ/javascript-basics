function negate(a) {
  return !a;
  // your code here
};

function both(a, b) {
  if (a===true && b===true){
    return true;
  }else{
    return false;
  }
  // your code here
}

function either(a, b) {
  if (a===true || b===true){
    return true 
  }else{ 
    return false;
    }
  };
  // your code here


function none(a, b) {
  if (a===true || b===true){
    return false
  }else{
    return true;
  }
  // your code here
};

function one(a, b) {
  if(a===true && b===true){
    return false;
  }else if (a===true || b===true){
  return true;
  }else{
      return false;
    }
  };
  


function truthiness(a) {
  return Boolean(a);
  }


  // your code here


function isEqual(a, b) {
  if(a===b){
    return true;
  }else{
    return false;
  }
  // your code here
};

function isGreaterThan(a, b) {
  if(a>b){
    return true;
  }else{
    return false;
  }
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  if (a<=b){
    return true;
  }else{
    return false;
  }
  // your code here
};

function isOdd(a) {
  if(a%2!==0){
    return true;
  }else{
    return false;
  }
 
};

function isEven(a) {
  if(a%2===0){
    return true;
  }else{
    return false;
  }

  // your code here
};

function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))){
    return true;
  }else{
    return false;
  }
  // your code here
};

function startsWith(char, string) {
  if(string.startsWith(char)){
    return true;
  }else {
    return false;
  }
  // your code here
};

function containsVowels(string) {
 
    const vowels = ["a" ,"e" ,"i", "o","u","A","B","C","D","E"];
    let result=false;
    for(let i=0;i<string.length;i++)
    if(vowels.includes(string[i])){
      result=true;
    }
    return result;
  }





function isLowerCase(string) {
  if(string===string.toLowerCase()){
    return true;
  }else{
    return false;
  }
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

export const negate = (a) => {
  if(a === true) {
	return false
} 
else {
	return true
}

};

export const both = (a, b) => {

if(a && b) {
	return true
}
else {
	return false
}  

};


export const either = (a, b) => {
if(a || b) {
	return true
}
else {
	return false
}  

};

export const none = (a, b) => {
if(!a && !b) {
	return true
}
else { 

	return false
}
};

export const one = (a, b) => {
  if(a && b || !a && !b ) {
  
  return false 
}
else {
	return true
}
};

export const truthiness = (a) => {
  if(a) {
  
  return true
 
}

else {

  return false
}
};

export const isEqual = (a, b) => {
   if(a === b) {
  
  return true
 
}

else {

  return false
}
};

export const isGreaterThan = (a, b) => {
   if(a > b) {
  
  return true
 
}

else {

  return false
}
};

export const isLessThanOrEqualTo = (a, b) => {
   if(a <= b) {
  
  return true
 
}

else {

  return false
}
};

export const isOdd = (a) => {
   if(a % 2 !== 0) {
  
  return true
 
}

else {

  return false
}
};

export const isEven = (a) => {
  if(a % 2 === 0) {
  
  return true
 
}

else {

  return false
}
};

export const isSquare = (a) => {

  if (a >= 0 && Math.sqrt(a) % 1 === 0) {
	
  return true
  }

else {

  return false
}
};

export const startsWith = (char, string) => {
  if (string[0] === char) {
	
  return true
  }

else {

  return false
}
};

export const containsVowels = (string) => {
  for (i=0; i < string.length; i++) {
  
  if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o"
    || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O"
    || string[i] === "U") {
      
     return true
    
    break     
  }
else {
return false
}
};

export const isLowerCase = (string) => {
  // your code here
};

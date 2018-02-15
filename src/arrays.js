export const getNthElement = (index, array) => {
  return array[index]// your code here
};

export const arrayToCSVString = (array) => {
  return array.toString()// your code here
};

export const csvStringToArray = (string) => {
  return string.split(',')// your code here
};

export const addToArray = (element, array) => {
  array.push(element)// your code here
};

export const addToArray2 = (element, array) => {
return array2 = array.push([element]) // your code here
};

export const removeNthElement = (index, array) => {
  return array.splice(index,1) // your code here
};

export const numbersToStrings = (numbers) => {
  return numbers.map(String)// your code here
};

export const uppercaseWordsInArray = (strings) => {
  return strings.map(function(x){ return x.toUpperCase()})// your code here
};

export const reverseWordsInArray = (strings) => {
  strings.map(function(strings){ 
    return strings.reverse()})// your code here
};

export const onlyEven = (numbers) => {
  return numbers.filter(function(num){return num % 2 === 0
  })  
    // your code here
};

export const removeNthElement2 = (index, array) => {
   const newArray = array.slice(index,index + 1)
   return newArray// your code here
};

export const elementsStartingWithAVowel = (strings) => {
  // your code here
};

export const removeSpaces = (string) => {
  // your code here
};

export const sumNumbers = (numbers) => {
  // your code here
};

export const sortByLastLetter = (strings) => {
  // your code here
};

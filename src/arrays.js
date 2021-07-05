const getNthElement = (index, array) => {

  let arrayIndex = index;
  let arrayLenght = array.length;
  if (arrayIndex < arrayLenght) {
     return array[arrayIndex];
  } 
    return Array[arrayLenght -(arrayIndex)];
  
};

const arrayToCSVString = array => {
  // your code here
 return array.join(",")

};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
   
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here

  return numbers.toString().split(',')
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(name => name.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(item => item.split('').reverse().join(''));


};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(item => item % 2 === 0);
};

const removeNthElement2 = (index, array) => {
 // your code here

};
const elementsStartingWithAVowel = strings => {
  // your code here
  const vowels = ['a','e','i','o','u'];
  return vowels.map(function(vowel) {
    return strings.find(function(string) {
      return string.toLowerCase().charAt(0) === vowel;
    });
  });
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s+/g, '')
};

const sumNumbers = numbers => {
    // your code here
  return numbers.reduce((acc, curr) => acc + curr);
};

const sortByLastLetter = strings => {
  // your code here

  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

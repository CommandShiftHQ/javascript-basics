const getNthElement = (index, array) => {
  if (array.length <= 4) {
    return array[index];
  }
  };
const arrayToCSVString = (array) => { 
  return array.join()
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  array.concat(element);
  return array.concat(element);;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return (strings.map(strings => strings.toUpperCase()));
};
const reverseWordsInArray = (strings) => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter(numbers => numbers % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, 2).concat(array.slice(3));
};

const elementsStartingWithAVowel = (strings) => {
};

const removeSpaces = (string) => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = (strings) => {
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
  sortByLastLetter,
};

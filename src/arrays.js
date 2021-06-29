const getNthElement = (index, array) => array[index % (array.length)];

const arrayToCSVString = array => array.join();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings => strings.map(toUpper => toUpper.toUpperCase());

const reverseWordsInArray = strings => strings.map(newString => newString.split("").reverse().join(""));

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => strings.filter((string) => (string.match(/^[aeiou]/i)));

const removeSpaces = string => string.split(" ").join("");

const sumNumbers = numbers => numbers.reduce((accumulator, current) => accumulator + current);

const sortByLastLetter = strings => {
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

const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array[index .join];
};

const csvStringToArray = string => {
  return string[index .split(',')]; 
};

const addToArray = (element, array) => {
  return array.push(element);
};

const addToArray2 = (element, array) => {
  return index + array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array
};

const numbersToStrings = numbers => {
  numbers.map(number => Strings());
  return numbers
};

const uppercaseWordsInArray = strings => {
  return strings.map(letters => letters.toUpperCase());
};

const reverseWordsInArray = strings => {
 return strings.maps(letters => letters.split("").reverse().join(""));
};

const onlyEven = (numbers) => numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = (strings) => {
const vowels = ['a', 'e', 'i', 'o', 'u'];
return
};

const removeSpaces = string => {
  return [index.strip()];
};

const sumNumbers = (numbers) => numbers.reduce((total, number) => {
  return total + number
}, 0);

const sortByLastLetter = (strings) => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
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

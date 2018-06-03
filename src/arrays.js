const getNthElement = (index, array) => {
if (index > array.length -1) {
  return array[index % array.length]
} else { return array[index]}
};

const arrayToCSVString = (array) => {
  return array.toString()
};

const csvStringToArray = (string) => {
  return string.split(',')
};

const addToArray = (element, array) => {
   array.push(element)
};

const addToArray2 = (element, array) => {
  return newArray2 = array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(strings => strings.toString());
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(uppercase => uppercase.toUpperCase());
};

const reverseWordsInArray = (strings) => {
    return strings.map(reversed => reversed.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
    const evenNumbers = onlyEven.filter(number => number % 2 );
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
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
}

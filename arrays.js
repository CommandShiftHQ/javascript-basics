const getNthElement = (index, array) => {
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.slice(4, 0, element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }
  return numbers;
};

const uppercaseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase()
  }
  return strings;
};

const reverseWordsInArray = (strings) => {
  return strings.split(",").reverse().join("");
};

const onlyEven = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] % 2 === 0;
  }
  return numbers;
};

const removeNthElement2 = (index, array) => {
  array.splice(index, 1)
  return array;
};

const elementsStartingWithAVowel = (strings) => {
  let results = [];
  for (let i = 0; i < strings.length; i++) {
    if ((strings[i].startsWith('a')) || (strings[i].startsWith('A')) || (strings[i].startsWith('e')) || (strings[i].startsWith('E')) || (strings[i].startsWith('i')) || (strings[i].startsWith('I')) || (strings[i].startsWith('o')) || (strings[i].startsWith('O')) || (strings[i].startsWith('u')) || (strings[i].startsWith('U'))) {
      results.push(strings[i]);
    }
  }
  return results;
};

const removeSpaces = (string) => {
  const result = string.split(' ').join('');
  return result;
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
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

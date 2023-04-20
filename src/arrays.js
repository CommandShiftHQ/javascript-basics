const getNthElement = (index, array) => {
  index %= array.length;
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

function addToArray(element, array) {
  array.push(element);
}

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings
  .join()
  .toUpperCase()
  .split(',');
};

const reverseWordsInArray = strings => {
  return strings
  .toString()
  .split('')
  .reverse()
  .join('')
  .split(',')
  .reverse();
};

const onlyEven = numbers => {
  function even(n) {
    return !(n % 2);
  }
  return numbers.filter(even);
};

const removeNthElement2 = (index, array) => {
  const firstArray = array.slice(0, index);
  const secondArray = array.slice(index + 1, array[-1]);
  return firstArray.concat(secondArray);
};

const elementsStartingWithAVowel = strings => {
  const vowelWords = strings.filter(word => /^[aeiou]/i.test(word))
  return vowelWords;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const sortByLastLetter = strings => {
  function comparingLastLetter(a, b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return strings.sort(comparingLastLetter);
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

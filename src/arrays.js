const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;
  return array[newIndex];
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
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map((item) => item.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map((item) => item.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = (strings) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return strings.filter((item) => {
    const firstLetter = item[0].toLowerCase();
    return vowels.includes(firstLetter);
  });
};

const removeSpaces = (string) => {
  return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

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
  sortByLastLetter,
};

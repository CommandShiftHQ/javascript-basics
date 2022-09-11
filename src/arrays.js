const getNthElement = (index, array) => {
  // your code here
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  let newArray = [].concat(array);
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  // your code here
  const upper = strings.map(element => {
    return element.toUpperCase();
  });
  return upper;
};

const reverseWordsInArray = strings => {
  // your code here
  // console.log(strings);
  // result = strings.toString();
  // console.log(result);
};

const onlyEven = numbers => {
  // your code here
  const even = numbers.filter(number => {
    return number % 2 === 0;
  });
  return even;
};

const removeNthElement2 = (index, array) => {
  // your code here
  // removedItem = array.splice(index, 1);
  // console.log(array);
  // return array;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  // your code here
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
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
};

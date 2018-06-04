const getNthElement = (index, array) => {
    return array[index % array.length];
};

const arrayToCSVString = (array) => {
  return array.toString();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
 const array2 = array.concat(element);
  return array2;
};


const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.toString().split(',')
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings =>
  strings.map(string => string.split('').reverse().join(''));

const onlyEven = numbers =>
  numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) => {
  return array.filter((element, elementIndex) =>
    elementIndex !== index);
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(string => /(^[aeiou])/i.test(string));
};

const removeSpaces = (string) => {
  return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => {
    if ((a[a.length-1]) < (b[b.length-1])){
      return -1
    }
    return 1;
  });
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

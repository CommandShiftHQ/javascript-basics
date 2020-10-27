const getNthElement = (index, array) => {
  while (index >= array.length) {
    index -= array.length;
  }
  let answer = array[index];
  return answer;
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return (array2 = array.concat(element));
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(String => {
    return String.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(String => {
    return String.split("")
      .reverse()
      .join("");
  });
};

const onlyEven = numbers => {
  return numbers.filter(Number => {
    return Number % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(String => /^[aeiou]/i.test(String))
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((total, amount) => total + amount);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
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

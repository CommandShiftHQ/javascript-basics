const getNthElement = (index, array) => {
  while (index >= array.length) {
    // while index is greater or equal to length of array (4)
    index -= array.length;
    // subtraction assignment operator 
    // index = index - array.length
    // e.g. an index of 5 would be: 5 - 4 = 1
    // index now = 1
  };
  return array[index];
  // return the index of the array e.g. 1 or "dog"
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

// split() method divides 1 string into list of substrings and returns them in 1 array
// parameter uses a comma as a separator 

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (n, array) => {
  return array.splice(n, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  const upperCase = strings.map((strings => strings.toUpperCase()))
  return upperCase;
};

const reverseWordsInArray = strings => {
  return strings.map((strings => strings.split("").reverse().join("")));
};
// split() method with empty string parameter returns 3 arrays separating each character into a string 
// > ["c", "a", "t"] etc. 
// reverse() method returns 3 arrays with strings in reverse order
// > ["t", "a", "c"] etc. 
// join() method with empty string parameter concatenates the elements of each array
// e.g. ["t", "a", "c"] becomes one element in a new array: ["tac", ...]
// returns 1 array
// > [ "tac","esuoM", "ananab"]);

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  let toDelete = index;
  let answer = array.filter((element, index) => index !== toDelete);
  return answer;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => /^[aeiou]/ig.test(strings));
};
// test() method matches RegExp with strings

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};
// \s matches whitespace
// regex expressions are wrapped in:  / / 
// g flag performs global search i.e. whole string

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
};

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

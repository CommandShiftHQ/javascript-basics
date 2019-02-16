const getNthElement = (index, array) => {
  if (index<=(array.length -1)) {
    return array[index];
  }
  else {return array[(index%array.length)];
}
}

const arrayToCSVString = (array) => {
  return array.join()// your code here
};

const csvStringToArray = (string) => {
  return string.split(',')// your code here
};

const addToArray = (element, array) => {
  array.push(element);
  // your code here
};

const addToArray2 = (element, array) => {
  return array.concat(element);// your code here
};

const removeNthElement = (index, array) => {
  array.splice(index,1)// your code here
};

const numbersToStrings = (numbers) => {
  return numbers.toString().split(',');// your code here
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(upper => upper.toUpperCase())// your code here
};

const reverseWordsInArray = (strings) => {
  return strings.map(string => string.split('').reverse().join(''));// your code here
};


const onlyEven = (numbers) => {
  return numbers.filter(a => a%2 === 0)// your code here
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length))// your code here
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(str => /^[aeiou]/i.test(str)) /* 

  You can use a single RegExp and Array.prototype.filter() for that:
  
  console.log([
    'Foo',
    'Bar',
    'Abc',
    'Lorem',
    'Ipsum'
  ].filter(str => /^[aeiou]/i.test(str)));
  
  Full page
  
  Array.prototype.filter() returns a new array with all the elements that pass (return a truthy value) the predicate.
  
  RegExp.prototype.test() returns true if the RegExp finds a match on the string you pass in.
  
  Then, /^[aeiou]/i means:
  
      ^ matches the start of the string.
      [aeiou] matches any of the characters inside the square brackets, a single time.
      i is a case-insensitive modifier.
  your code here
  */
};

const removeSpaces = (string) => {
  return string = string.replace(/\s+/g, '')
};
/* your code here
\s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces). 
https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g

*/
const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);// your code here
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

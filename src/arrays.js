const getNthElement = (index, array) => {
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join(',');
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const array2 = array.slice();
   array2.push(element);
   return array2;
};

const removeNthElement = (index, array) => {
   array.splice(index, 1);
   return array;
};

const numbersToStrings = (numbers) => {
    return numbers.join().split(',');
    
  // your code here
};

const uppercaseWordsInArray = (strings) => {
for (let i = 0; i < strings.length; i ++) {
  strings[i] = strings[i].toUpperCase();
  } return strings;
};
const reverseWordsInArray = (strings) => {
 for (let i = 0; i < strings.length; i++) {
   strings2 = strings.map(s => s.split('').reverse().join(''));
 }  return strings2;
};


const onlyEven = (numbers) => {
     if (numbers % 2 === 0) {
       return true;
     } else { return false;
   } 
  };

const removeNthElement2 = (index, array) => {
  const arr2 = array.filter(array, index) ; {  
    return arr2, index;
  };
}

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
  sortByLastLetter,
  };
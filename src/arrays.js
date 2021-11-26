
const getNthElement = (index, array) => {
  return array[index%array.length];
};

const arrayToCSVString = array => {
  let newArray = '';
  for (let i = 0; i<array.length; i++){
    newArray += array[i];
    if (i<(array.length -1)){
      newArray += ",";
    }
  }
  return newArray;
};

const csvStringToArray = string => {
  // your code here
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array;
  let x = newArray.push(element);
}

const removeNthElement = (index, array) => {
  let array2=array.splice(index, 1);


};

const numbersToStrings = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  for (let i = 0; i <strings.length; i++) {
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = strings => {
  let reverseArray =[];
  for (i = 0; i < strings.length; i++) {
    let reverseString = '';
    let word = strings[i];
    for (j = word.length - 1; j >= 0; j--) {
       reverseString += word[j];
    }
    reverseArray.push(reverseString);
  }
  return reverseArray;
};

const onlyEven = numbers => {
  console.log(numbers);
  let newArray=[];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 === 0) {
      console.log(i, numbers[i]);
      newArray.push(numbers[i]);
    };
  }
  console.log(newArray);
  return newArray;
};

const removeNthElement2 = (index, array) => {
  let newArray = array.slice(index);
  console.log(array, newArray);
  return array;
};

const elementsStartingWithAVowel = strings => {
  let newArray = [];
  for (let i = 0; i< strings.length; i++) {
    let x = strings[i].toLowerCase();
    if (x.startsWith('a') || (x.startsWith('e')) || (x.startsWith('i')) ||
     (x.startsWith('o')) || (x.startsWith('u'))) {
       newArray.push(strings[i]);
     }
     
  };
  return newArray;
};


const removeSpaces = string => {
  let newString = '';
  for (let i = 0; i <string.length; i++){
    if (string[i] !== ' '){
      newString += (string[i]);
    };
  }
  return newString;
};

const sumNumbers = numbers => {
  // your code here
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
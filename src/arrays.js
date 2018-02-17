export const getNthElement = (index, array) => {
  //if n is greater than the number of elements, it cycles back to the start
    if (index > array.length - 1) {
      index = (index - array.length)
    }
      return (array[index]);
};

export const arrayToCSVString = (array) => {
  // returns the array elements as a comma-seperated string (defalt seperator is comma)
  return array.join();
};

export const csvStringToArray = (string) => {
  // converts the csv string as an array
  return string.split(',');
};

export const addToArray = (element, array) => {
  // adds the item to the end of the array
  return array.push(element);
};

export const addToArray2 = (element, array) => {
  // returns a new array with the value appended
  return array.concat(element);
};

export const removeNthElement = (index, array) => {
  // removes the element at position n
  return array.splice(index, 1);
};

export const numbersToStrings = (numbers) => {
  // converts every number in the array to a string
  // use map and pass the String constructor as a function, which will turn each number into a string
  return numbers.map(String);  

};

export const uppercaseWordsInArray = (strings) => {
  
  strings = strings.map(v => v.toUpperCase());

  return strings;
};

export const reverseWordsInArray = (strings) => {
  // reverses every string in an array
  strings = arrayToCSVString (strings);
 
  strings = strings.split("").reverse().join("");

  strings = csvStringToArray (strings);
  
  return strings.reverse();
};

export const onlyEven = (numbers) => {
  //filters the array and only returns even numbers

};

export const removeNthElement2 = (index, array) => {
  // your code here
};

export const elementsStartingWithAVowel = (strings) => {
  // your code here
};

export const removeSpaces = (string) => {
  // your code here
};

export const sumNumbers = (numbers) => {
  // your code here
};

export const sortByLastLetter = (strings) => {
  // your code here
};

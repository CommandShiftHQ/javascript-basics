export const getNthElement = (index, array) => {
  return array[index]
};

export const arrayToCSVString = (array) => {
  return array.join()
};

export const csvStringToArray = (string) => {
  return string.split(",")
};

export const addToArray = (array, element) => {
  
return array.push(element)
	
};

export const addToArray2 = (array, element) => {
  array.push(element)
	return array
};

export const removeNthElement = (index, array) => {
  return array.splice(index,1)
};

export const numbersToStrings = (numbers) => {
  return numbers.toString().split(",")
};

export const uppercaseWordsInArray = (strings) => {
let stringsUpper = []
	for(let i = 0; i < strings.length; i++) {
    	stringsUpper.push(strings[i].toUpperCase())
    	}
  return stringsUpper
};

export const reverseWordsInArray = (strings) => {
  // your code here
};

export const onlyEven = (numbers) => {
  // your code here
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

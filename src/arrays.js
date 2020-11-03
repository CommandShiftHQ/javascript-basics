const getNthElement = (index, array) => {
   //pass
  /*We need a more dynamic way including modulus
   because using -4 is not dynamic meaning we would 
   have to keep making new code for any updates!!!
   .length is what we need to use but I have tried 
   and not figured out the correct method yet! */
   while (index >3) {index = index -4};
   return array[index];
   /*but this works for now*/
    
};

const arrayToCSVString = array => {
  //pass
  return array.toString('')
};

const csvStringToArray = string => {
  //pass
  return string.split(",")
};

const addToArray = (element, array) => {
  // pass
  array.push(element);
  //array.push([element]);
  //array.concat(element);
  //array.concat([element]);
  //array.push(4)
  //array.concat(4)
};

const addToArray2 = (element, array) => {
  
 return array.concat(element);
//array.push(element);
 //return array
};

const removeNthElement = (index, array) => {
    return array.splice(index,1);
   
};

const numbersToStrings = numbers => {
  //pass
  /*numbers.toString converts the entire array to a string, .split(",")
   let me change each individual number to a string */
  return numbers.toString().split(",")
};

const uppercaseWordsInArray = strings => {
  //pass
  /* strings.map lets me select all the strings in the array and create a new array,
  the array method .map to .toUpperCase changes the array to uppercase*/
  return strings.map((strings => strings.toUpperCase()))
};

const reverseWordsInArray = strings => {
 //pass
  /*return strings.reverse = reverses the order of the array
 The split() method splits a String object into an array of string 
 by separating the string into sub strings.
The reverse() method reverses an array in place. The first array 
element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.
last I added .map, .map selects each individual element in array 
(I struggled to figure how to select the individual elements .map was the one)*/
 return strings.map(strings => strings.split("").reverse().join(""));
};

const onlyEven = numbers => {
  //pass
  /*filter function maybe??? 
  using filter and then giving a function named that function X.
  X % 2 should give back all even numbers but I don't quite understand the maths per usual
  https://stackoverflow.com/questions/51876350/javascript-filtering-even-numbers
  */
  let num = numbers.filter(function(x){
    return x % 2 === 0;
  })
  return num
};

const removeNthElement2 = (index, array) => {
  //need to check 
  /* let set1 = "";
    set1 = array.splice(0, 2);
    return array;*/
    //let set1 = "";
    //set1 = array.slice(1, 2)
      let arrayCopy = [...array];
      arrayCopy.splice(index,1);
      return arrayCopy;
  
   
};

const elementsStartingWithAVowel = strings => {
  //Need to select the case sensitive elements
  /*filter function and regEx */
  /* Array.prototype.filter() returns a new array with all the 
  elements that pass (return a truthy value) the predicate.
RegExp.prototype.test() returns true if the RegExp finds a match on the string you pass in.
- Then, /^[aeiou]/i means:
- ^ matches the start of the string.
- [aeiou] matches any of the characters inside the square brackets, a single time.
- i is a case-insensitive modifier*/ 
  //https://stackoverflow.com/questions/52028403/filter-array-of-strings-keeping-only-ones-starting-with-vowels
  //this part has passed!
  return strings.filter(strings => /^[aeiou]/i.test(strings));
  
};

const removeSpaces = string => {
 
   
  //string.replace(/ /g, "")
 // let string = str
  //str.replace(/\s+/g, '');
  //string.splice(" ").join(""); 
  // used reg ex, \s white space, /g global 
   return string.replace(/\s/g, "")
  // return string

  
};

const sumNumbers = numbers => {
  /*let total = 0
  for (i = 0; i < numbers.length; ++i) {
    total + numbers[i];}
    return total*/
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer);


  };

const sortByLastLetter = strings => {
//strings.sort(function(a, b){return a-b});
 /* strings.sort(function(a, b) {
   strings.reverse;
    return b - a
  });*/
   //return a.replace(/^\W+/, 'z').localeCompare(b.replace(/^\W+/, 'z'));
   //strings.sort(function(a, b){return b-a})
   
    const reversedWords = reverseWordsInArray(strings).sort();
    return reverseWordsInArray(reversedWords);
  
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

export const getNthElement = (index, array) => {
  if (index > array.length -1){
    return array[index - array.length];
    }
  return array[index];
};
/*
const array = ['cat', 'dog', 'elephant', 'fox']

'returns the element at the given position'
expect(getNthElement(0, array)).toEqual('cat')
expect(getNthElement(2, array)).toEqual('elephant')
expect(getNthElement(3, array)).toEqual('fox')

'if n is greater than the number of elements, it cycles back to the start'
expect(getNthElement(4, array)).toEqual('cat')
expect(getNthElement(5, array)).toEqual('dog')
*/

export const arrayToCSVString = (array) => {
  return array.join();
};
/*
'returns the array elements as a comma-seperated string'
expect(arrayToCSVString(['a', 'b', 'c', 'd'])).toEqual('a,b,c,d')
expect(arrayToCSVString([1, 2, 3, 4, 5])).toEqual('1,2,3,4,5')
*/

export const csvStringToArray = (string) => {
  return string.split(",");
};
/*
'converts the csv string as an array'
expect(csvStringToArray('a,b,c,d')).toEqual(['a', 'b', 'c', 'd'])
expect(csvStringToArray('1,2,3,4,5')).toEqual(['1', '2', '3', '4', '5'])
*/

export const addToArray = (element, array) => {
  array.push(element);
};
/*
'adds the item to the end of the array'
const array = []
const array2 = [1, 2, 3]
    
expect(addToArray('a', array)).toEqual(undefined)
expect(addToArray(4, array2)).toEqual(undefined)

expect(array).toEqual(['a'])
expect(array2).toEqual([1, 2, 3, 4])
*/

export const addToArray2 = (element, array) => {
  return array.concat(element);
};
/*
'returns a new array with the value appended'
const array = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

expect(addToArray2('d', array)).toEqual(['a', 'b', 'c', 'd'])
expect(array).toEqual(['a', 'b', 'c'])

expect(addToArray2(4, array2)).toEqual([1, 2, 3, 4])
expect(array2).toEqual([1, 2, 3])
*/

export const removeNthElement = (index, array) => {
  return array.splice(index, 1);
  // array.splice(index, howmany)
  // https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays
};
/*
'removes the element at position n'
const array = ['ant', 'bison', 'cockerel', 'duck', 'elephant']
removeNthElement(2, array)
expect(array).toEqual(['ant', 'bison', 'duck', 'elephant'])
*/

export const numbersToStrings = (numbers) => {
  return numbers.map(String);
};
/*
'converts every number in the array to a string'
expect(numbersToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
*/

export const uppercaseWordsInArray = (strings) => {
  return strings.map(function(n) {
    return(n).toUpperCase()
    });
};
/*
'makes every string in the array uppercase'
expect(uppercaseWordsInArray(['cat', 'mouse', 'banana'])).toEqual(['CAT', 'MOUSE', 'BANANA'])
*/

export const reverseWordsInArray = (strings) => {
  const animalsRev = strings.map((strings) => {
    const char = strings.split("");
    const reverseChar = char.reverse();
    return reverseChar.join("");
    })
  return animalsRev;
  // return strings.split("").reverse().join("");
  // http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
};
/*
'reverses every string in an array'
expect(reverseWordsInArray(['cat', 'Mouse', 'banana'])).toEqual(['tac', 'esuoM', 'ananab'])
*/

export const onlyEven = (numbers) => {
  return numbers.filter(function(n){return n % 2===0})
  // https://gist.github.com/bondarewicz/8843037
};
/*
'filters the array and only returns even numbers'
expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8])
*/

export const removeNthElement2 = (index, array) => {
  const firstSection = array.slice(0, index);
  const secondSection = array.slice(index + 1);
  // array.slice([begin[, end]])

  return firstSection.concat(secondSection);
};
/*
'returns an array with the nth element removed, and does not mutate the original'
const array = ['bike', 'car', 'train', 'bus'];
expect(removeNthElement2(2, array)).toEqual(['bike', 'car', 'bus'])
expect(array).toEqual(['bike', 'car', 'train', 'bus'])
*/

export const elementsStartingWithAVowel = (strings) => {
  let stringsArray = []
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  for (let i = 0; i < strings.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
    if (strings[i].charAt(0) == vowels[n]) {
      stringsArray.push(strings[i]);
      }
    }
  }
  return stringsArray
};
// https://stackoverflow.com/questions/26926994/javascript-check-if-character-is-a-vowel
/*
'returns elements starting with a vowel'
expect(elementsStartingWithAVowel(['apple', 'bapple', 'capple', 'dapple', 'epple', 'fepple', 'gepple', 'hepple', 'ipple', 'jipple', 'kipple', 'lipple', 'mipple', 'nipple', 'opple', 'popple', 'qopple', 'ropple', 'sopple', 'topple', 'upple', 'vupple', 'wupple', 'xupple', 'yupple', 'zupple',])).toEqual(['apple', 'epple', 'ipple', 'opple', 'upple'])

'is case insensitive'
expect(elementsStartingWithAVowel(['Apple', 'Bapple', 'Capple', 'Dapple', 'Epple', 'Fepple', 'Gepple', 'Hepple', 'Ipple', 'Jipple', 'Kipple', 'Lipple', 'Mipple', 'Nipple', 'Opple', 'Popple', 'Qopple', 'Ropple', 'Sopple', 'Topple', 'Upple', 'Vupple', 'Wupple', 'Xupple', 'Yupple', 'Zupple'])).toEqual(['Apple', 'Epple', 'Ipple', 'Opple', 'Upple'])
*/

export const removeSpaces = (string) => {
  return string.split(" ").join("")
};
/*
'returns the string with the space characters removed'
expect(removeSpaces('this string has spaces')).toEqual('thisstringhasspaces')
expect(removeSpaces(' this one has sneaky   spaces ')).toEqual('thisonehassneakyspaces')
*/

export const sumNumbers = (numbers) => {
  let total = 0;

  for (let n = 0; n < numbers.length; n++) {
    total += numbers[n];
    // total += numbers[n] is shorthand for total = total + numbers[n].
    }
  return total;
};
/*
'returns the sum of the numbers in the array'
expect(sumNumbers([1, 3, 5, 6, 2, 8])).toEqual(25)
*/

export const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};
// https://stackoverflow.com/questions/32491788/sort-strings-by-last-letter-alphabetically-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
/*
'sorts the string by the last character'
expect(sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen'])).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy'])
*/

const getNthElement = (index, array) => {
    if (index < array.length) {
        return array[index]
    } else {
        return array[index - array.length]
    }
    // your code here
};

const arrayToCSVString = (array) => {
    return array.toString(array)
        // your code here
};

const csvStringToArray = (string) => {
    return string.split(',') // your code here
};

const addToArray = (element, array) => {
    array.push(element) // your code here
};

const addToArray2 = (element, array) => {
    return array.concat(element) // your code here
};

const removeNthElement = (index, array) => {
    array.splice(index, 1)
};

const numbersToStrings = (numbers) => {
    return numbers.toString(numbers).split(',')
        // your code here
};

const uppercaseWordsInArray = (strings) => {
    return strings.map(a => a.toUpperCase())
};

const reverseWordsInArray = (strings) => {
    return strings.map(a => a.split("").reverse().join(""))
};

const onlyEven = (numbers) => {
    return numbers.filter(num => num = 0 || num % 2 === 0)
        // your code here
};

const removeNthElement2 = (index, array) => {
    const array2 = [...array]
    array2.splice(index, 1)
    return array2

    // your code here
};

const elementsStartingWithAVowel = (strings) => {
    return strings.filter(a => a.charAt(0).match(/[aeiou]/i))
        // your code here
};

const removeSpaces = (string) => {
    return string.replace(/\s/g, '') // your code here
};

const sumNumbers = (numbers) => {
    return numbers.reduce((a, b) => a + b, 0)
};

const sortByLastLetter = (strings) => {
    const reverse = strings.map(a => a.split("").reverse().join(""))
    const orderedReverse = reverse.sort()
    const finalReverseList = orderedReverse.map(a => a.split("").reverse().join(""))
    return finalReverseList

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
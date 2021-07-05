"use strict";

var _require = require("../src/arrays"),
    getNthElement = _require.getNthElement,
    arrayToCSVString = _require.arrayToCSVString,
    csvStringToArray = _require.csvStringToArray,
    addToArray = _require.addToArray,
    addToArray2 = _require.addToArray2,
    removeNthElement = _require.removeNthElement,
    numbersToStrings = _require.numbersToStrings,
    uppercaseWordsInArray = _require.uppercaseWordsInArray,
    reverseWordsInArray = _require.reverseWordsInArray,
    onlyEven = _require.onlyEven,
    removeNthElement2 = _require.removeNthElement2,
    elementsStartingWithAVowel = _require.elementsStartingWithAVowel,
    removeSpaces = _require.removeSpaces,
    sumNumbers = _require.sumNumbers,
    sortByLastLetter = _require.sortByLastLetter;

describe("getNthElement", function () {
  var array = ["cat", "dog", "elephant", "fox"];
  it("returns the element at the given position", function () {
    expect(getNthElement(0, array)).toEqual("cat");
    expect(getNthElement(2, array)).toEqual("elephant");
    expect(getNthElement(3, array)).toEqual("fox");
  });
  xit("if n is greater than the number of elements, it cycles back to the start", function () {
    expect(getNthElement(4, array)).toEqual("cat");
    expect(getNthElement(5, array)).toEqual("dog");
  });
});
describe("arrayToCSVString", function () {
  xit("returns the array elements as a comma-seperated string", function () {
    expect(arrayToCSVString(["a", "b", "c", "d"])).toEqual("a,b,c,d");
    expect(arrayToCSVString([1, 2, 3, 4, 5])).toEqual("1,2,3,4,5");
  });
});
describe("csvStringToArray", function () {
  xit("converts the csv string as an array", function () {
    expect(csvStringToArray("a,b,c,d")).toEqual(["a", "b", "c", "d"]);
    expect(csvStringToArray("1,2,3,4,5")).toEqual(["1", "2", "3", "4", "5"]);
  });
});
describe("addToArray", function () {
  xit("adds the item to the end of the array", function () {
    var array = [];
    var array2 = [1, 2, 3];
    expect(addToArray("a", array)).toEqual(undefined);
    expect(addToArray(4, array2)).toEqual(undefined);
    expect(array).toEqual(["a"]);
    expect(array2).toEqual([1, 2, 3, 4]);
  });
});
describe("addToArray2", function () {
  xit("returns a new array with the value appended", function () {
    var array = ["a", "b", "c"];
    var array2 = [1, 2, 3];
    expect(addToArray2("d", array)).toEqual(["a", "b", "c", "d"]);
    expect(array).toEqual(["a", "b", "c"]);
    expect(addToArray2(4, array2)).toEqual([1, 2, 3, 4]);
    expect(array2).toEqual([1, 2, 3]);
  });
});
describe("removeNthElement", function () {
  xit("removes the element at position n", function () {
    var array = ["ant", "bison", "cockerel", "duck", "elephant"];
    removeNthElement(2, array);
    expect(array).toEqual(["ant", "bison", "duck", "elephant"]);
  });
});
describe("numbersToStrings", function () {
  xit("converts every number in the array to a string", function () {
    expect(numbersToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
});
describe("uppercaseWordsInArray", function () {
  xit("makes every string in the array uppercase", function () {
    expect(uppercaseWordsInArray(["cat", "mouse", "banana"])).toEqual(["CAT", "MOUSE", "BANANA"]);
  });
});
describe("reverseWordsInArray", function () {
  xit("reverses every string in an array", function () {
    expect(reverseWordsInArray(["cat", "Mouse", "banana"])).toEqual(["tac", "esuoM", "ananab"]);
  });
});
describe("onlyEven", function () {
  xit("filters the array and only returns even numbers", function () {
    expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });
});
describe("removeNthElement2", function () {
  xit("returns an array with the nth element removed, and does not mutate the original", function () {
    var array = ["bike", "car", "train", "bus"];
    expect(removeNthElement2(2, array)).toEqual(["bike", "car", "bus"]);
    expect(array).toEqual(["bike", "car", "train", "bus"]);
  });
});
describe("elementsStartingWithAVowel", function () {
  xit("returns elements starting with a vowel", function () {
    expect(elementsStartingWithAVowel(["apple", "bapple", "capple", "dapple", "epple", "fepple", "gepple", "hepple", "ipple", "jipple", "kipple", "lipple", "mipple", "nipple", "opple", "popple", "qopple", "ropple", "sopple", "topple", "upple", "vupple", "wupple", "xupple", "yupple", "zupple"])).toEqual(["apple", "epple", "ipple", "opple", "upple"]);
  });
  xit("is case insensitive", function () {
    expect(elementsStartingWithAVowel(["Apple", "Bapple", "Capple", "Dapple", "Epple", "Fepple", "Gepple", "Hepple", "Ipple", "Jipple", "Kipple", "Lipple", "Mipple", "Nipple", "Opple", "Popple", "Qopple", "Ropple", "Sopple", "Topple", "Upple", "Vupple", "Wupple", "Xupple", "Yupple", "Zupple"])).toEqual(["Apple", "Epple", "Ipple", "Opple", "Upple"]);
  });
});
describe("removeSpaces", function () {
  xit("returns the string with the space characters removed", function () {
    expect(removeSpaces("this string has spaces")).toEqual("thisstringhasspaces");
    expect(removeSpaces(" this one has sneaky   spaces ")).toEqual("thisonehassneakyspaces");
  });
});
describe("sumNumbers", function () {
  xit("returns the sum of the numbers in the array", function () {
    expect(sumNumbers([1, 3, 5, 6, 2, 8])).toEqual(25);
  });
});
describe("sortByLastLetter", function () {
  xit("sorts the string by the last character", function () {
    expect(sortByLastLetter(["Lannister", "Stark", "Greyjoy", "Targaryen"])).toEqual(["Stark", "Targaryen", "Lannister", "Greyjoy"]);
  });
});
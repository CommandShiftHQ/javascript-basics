import {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
  getType,
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
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
} from '../src';

describe('add', () => {
  it('adds the two numbers together', () => {
    expect(add(2, 1)).toEqual(3);
    expect(add(15, 76)).toEqual(91);
    expect(add(12, 0)).toEqual(12);
    expect(add(10, -5)).toEqual(5);
  });
});

describe('subtract', () => {
  it('subtracts the second number from the first', () => {
    expect(subtract(2, 1)).toEqual(1);
    expect(subtract(1, 2)).toEqual(-1);
    expect(subtract(-2, 1)).toEqual(-3);
    expect(subtract(1, -2)).toEqual(3);
    expect(subtract(-1, -1)).toEqual(0);
  });
});

describe('multiply', () => {
  it('multiplies the two numbers together', () => {
    expect(multiply(10, 3)).toEqual(30);
    expect(multiply(-11, 5)).toEqual(-55);
    expect(multiply(-4, -9)).toEqual(36);
  });
});

describe('divide', () => {
  it('divides the first number by the second number', () => {
    expect(divide(20, 5)).toEqual(4);
    expect(divide(5, 2)).toEqual(2.5);
    expect(divide(2, 5)).toEqual(0.4);
    expect(divide(10, 3)).toBeCloseTo(3.33);
  });
});

describe('power', () => {
  it('returns the first number to the power of the second', () => {
    expect(power(5, 2)).toEqual(25);
    expect(power(2, 3)).toEqual(8);
    expect(power(10, 5)).toEqual(100000);
  });
});

describe('round', () => {
  it('rounds the number to the nearest integer', () => {
    expect(round(2.1)).toEqual(2);
    expect(round(9.7)).toEqual(10);
    expect(round(5.5)).toEqual(6);
  });
});

describe('roundUp', () => {
  it('rounds the number up to the nearest integer', () => {
    expect(roundUp(2.1)).toEqual(3);
    expect(roundUp(9.7)).toEqual(10);
    expect(roundUp(5.5)).toEqual(6);
  });
});

describe('roundDown', () => {
  it('rounds the number down to the nearest integer', () => {
    expect(roundDown(2.1)).toEqual(2);
    expect(roundDown(9.7)).toEqual(9);
    expect(roundDown(5.5)).toEqual(5);
  });
});

describe('absolute', () => {
  it('returns the absolute value of the number', () => {
    expect(absolute(-1)).toEqual(1);
    expect(absolute(1)).toEqual(1);
    expect(absolute(0)).toEqual(0);
  });
});

describe('quotient', () => {
  it('returns the quotient from dividing the first number by the second number', () => {
    expect(quotient(10, 3)).toEqual(3);
    expect(quotient(18, 7)).toEqual(2);
    expect(quotient(77, 10)).toEqual(7);
    expect(quotient(-9, 2)).toEqual(-4);
  });
});

describe('remainder', () => {
  it('returns the remainder when dividing the first number by the second number', () => {
    expect(remainder(10, 3)).toEqual(1);
    expect(remainder(18, 7)).toEqual(4);
    expect(remainder(77, 10)).toEqual(7);
    expect(remainder(-9, 2)).toEqual(-1);
  });
});

describe('sayHello', () => {
  it('returns Hello with the given string!', () => {
    expect(sayHello('MCR Codes')).toEqual('Hello, MCR Codes!');
    expect(sayHello('world')).toEqual('Hello, world!');
    expect(sayHello('fsghjdfkhgf')).toEqual('Hello, fsghjdfkhgf!');
  });
});

describe('uppercase', () => {
  it('returns the uppercased string', () => {
    expect(uppercase('abc')).toEqual('ABC');
    expect(uppercase('def')).toEqual('DEF');
    expect(uppercase('ghi')).toEqual('GHI');
  });
});

describe('lowercase', () => {
  it('returns the uppercased string', () => {
    expect(lowercase('ABC')).toEqual('abc');
    expect(lowercase('DEF')).toEqual('def');
    expect(lowercase('GHI')).toEqual('ghi');
  });
});

describe('countCharacters', () => {
  it('returns the number of characters in the string', () => {
    expect(countCharacters('fsfsgsfdg')).toEqual(9);
    expect(countCharacters('fsfsg')).toEqual(5);
    expect(countCharacters('')).toEqual(0);
  });
});

describe('firstCharacter', () => {
  it('returns the first character of the string', () => {
    expect(firstCharacter('ABC')).toEqual('A');
    expect(firstCharacter('DEF')).toEqual('D');
    expect(firstCharacter('GHI')).toEqual('G');
  });
});

describe('firstCharacters', () => {
  it('returns the first n characters of the string', () => {
    expect(firstCharacters('sd32fg45', 4)).toEqual('sd32');
    expect(firstCharacters('asd', 2)).toEqual('as');
  });
});

describe('negate', () => {
  it('returns the opposite of the passed boolean value', () => {
    expect(negate(true)).toBe(false);
    expect(negate(false)).toBe(true);
  });
});

describe('both', () => {
  it('returns true if both of the given values are true', () => {
    expect(both(true, true)).toBe(true);
    expect(both(true, false)).toBe(false);
    expect(both(false, true)).toBe(false);
    expect(both(false, false)).toBe(false);
  });
});

describe('either', () => {
  it('returns true if at least one of the given values are true', () => {
    expect(either(true, true)).toBe(true);
    expect(either(true, false)).toBe(true);
    expect(either(false, true)).toBe(true);
    expect(either(false, false)).toBe(false);
  });
});

describe('none', () => {
  it('returns true if neither of the given values are true', () => {
    expect(none(true, true)).toBe(false);
    expect(none(true, false)).toBe(false);
    expect(none(false, true)).toBe(false);
    expect(none(false, false)).toBe(true);
  });
});

describe('one', () => {
  it('returns true if exactly one of the given values are true', () => {
    expect(one(true, true)).toBe(false);
    expect(one(true, false)).toBe(true);
    expect(one(false, true)).toBe(true);
    expect(one(false, false)).toBe(false);
  });
});

describe('truthiness', () => {
  it('returns the truthiness of the given value', () => {
    expect(truthiness('')).toBe(false);
    expect(truthiness('dbbd')).toBe(true);
    expect(truthiness(0)).toBe(false);
    expect(truthiness(3)).toBe(true);
    expect(truthiness([])).toBe(true);
    expect(truthiness({})).toBe(true);
    expect(truthiness(null)).toBe(false);
    expect(truthiness(undefined)).toBe(false);
    expect(truthiness(NaN)).toBe(false);
  });
});

describe('isEqual', () => {
  it('returns whether the two values are even', () => {
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual('true', 'true')).toBe(true);
    expect(isEqual('true', 'false')).toBe(false);
    expect(isEqual(10, 0)).toBe(false);
    expect(isEqual(10, 10)).toBe(true);
  });
});

describe('isGreaterThan', () => {
  it('returns true if the first number is strictly greater than the second', () => {
    expect(isGreaterThan(1, 2)).toBe(false);
    expect(isGreaterThan(3, 2)).toBe(true);
    expect(isGreaterThan(4, 4)).toBe(false);
  });
});

describe('isLessThanOrEqualTo', () => {
  it('returns true if the first number is less than or equal to the second', () => {
    expect(isLessThanOrEqualTo(1, 2)).toBe(true);
    expect(isLessThanOrEqualTo(3, 2)).toBe(false);
    expect(isLessThanOrEqualTo(4, 4)).toBe(true);
  });
});

describe('isOdd', () => {
  it('returns whether the number is odd', () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(8)).toBe(false);
  });
});

describe('isEven', () => {
  it('returns whether the number is even', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(8)).toBe(true);
  });
});

describe('isSquare', () => {
  it('returns true if the number is a square', () => {
    expect(isSquare(9)).toEqual(true);
    expect(isSquare(5)).toEqual(false);
    expect(isSquare(-4)).toEqual(false);
    expect(isSquare(0)).toEqual(true);
  });
});

describe('startsWith', () => {
  it('returns whether the given string starts with the given character', () => {
    expect(startsWith('a', 'aardvark')).toBe(true);
    expect(startsWith('a', 'qaardvark')).toBe(false);
    expect(startsWith('a', 'Aardvark')).toBe(false);
  });
});

describe('containsVowels', () => {
  it('returns whether the given string contains vowels', () => {
    expect(containsVowels('cat')).toBe(true);
    expect(containsVowels('DOG')).toBe(true);
    expect(containsVowels('why')).toBe(false);
  });
});

describe('isLowerCase', () => {
  it('it returns true if the given string is lowercase', () => {
    expect(isLowerCase('abc')).toBe(true);
    expect(isLowerCase('abc213')).toBe(true);
    expect(isLowerCase('Abc')).toBe(false);
  });
});

describe('getType', () => {
  it('returns the type of the value', () => {
    expect(getType('foo')).toEqual('string');
    expect(getType(9)).toEqual('number');
    expect(getType(true)).toEqual('boolean');
    expect(getType([])).toEqual('object');
    expect(getType({})).toEqual('object');
    expect(getType(NaN)).toEqual('number');
    expect(getType(null)).toEqual('object');
    expect(getType(Object)).toEqual('function');
  });
});

describe('getNthElement', () => {
  const array = ['cat', 'dog', 'elephant', 'fox'];

  it('returns the element at the given position', () => {
    expect(getNthElement(0, array)).toEqual('cat');
    expect(getNthElement(2, array)).toEqual('elephant');
    expect(getNthElement(3, array)).toEqual('fox');
  });

  it('if n is greater than the number of elements, it cycles back to the start', () => {
    expect(getNthElement(4, array)).toEqual('cat');
    expect(getNthElement(5, array)).toEqual('dog');
  });
});

describe('arrayToCSVString', () => {
  it('returns the array elements as a comma-seperated string', () => {
    expect(arrayToCSVString(['a', 'b', 'c', 'd'])).toEqual('a,b,c,d');
    expect(arrayToCSVString([1, 2, 3, 4, 5])).toEqual('1,2,3,4,5');
  });
});

describe('csvStringToArray', () => {
  it('converts the csv string as an array', () => {
    expect(csvStringToArray('a,b,c,d')).toEqual(['a', 'b', 'c', 'd']);
    expect(csvStringToArray('1,2,3,4,5')).toEqual(['1', '2', '3', '4', '5']);
  });
});

describe('addToArray', () => {
  it('adds the item to the end of the array', () => {
    const array = [];
    const array2 = [1, 2, 3];

    expect(addToArray('a', array)).toEqual(undefined);
    expect(addToArray(4, array2)).toEqual(undefined);

    expect(array).toEqual(['a']);
    expect(array2).toEqual([1, 2, 3, 4]);
  });
});

describe('addToArray2', () => {
  it('returns a new array with the value appended', () => {
    const array = ['a', 'b', 'c'];
    const array2 = [1, 2, 3];

    expect(addToArray2('d', array)).toEqual(['a', 'b', 'c', 'd']);
    expect(array).toEqual(['a', 'b', 'c']);

    expect(addToArray2(4, array2)).toEqual([1, 2, 3, 4]);
    expect(array2).toEqual([1, 2, 3]);
  });
});

describe('removeNthElement', () => {
  it('removes the element at position n', () => {
    const array = ['ant', 'bison', 'cockerel', 'duck', 'elephant'];
    removeNthElement(2, array);
    expect(array).toEqual(['ant', 'bison', 'duck', 'elephant']);
  });
});

describe('numbersToStrings', () => {
  it('converts every number in the array to a string', () => {
    expect(numbersToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  });
});

describe('uppercaseWordsInArray', () => {
  it('makes every string in the array uppercase', () => {
    expect(uppercaseWordsInArray(['cat', 'mouse', 'banana'])).toEqual(['CAT', 'MOUSE', 'BANANA']);
  });
});

describe('reverseWordsInArray', () => {
  it('reverses every string in an array', () => {
    expect(reverseWordsInArray(['cat', 'Mouse', 'banana'])).toEqual(['tac', 'esuoM', 'ananab']);
  });
});

describe('onlyEven', () => {
  it('filters the array and only returns even numbers', () => {
    expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });
});

describe('removeNthElement2', () => {
  it('returns an array with the nth element removed, and does not mutate the original', () => {
    const array = ['bike', 'car', 'train', 'bus'];
    expect(removeNthElement2(2, array)).toEqual(['bike', 'car', 'bus']);
    expect(array).toEqual(['bike', 'car', 'train', 'bus']);
  });
});

describe('elementsStartingWithAVowel', () => {
  it('returns elements starting with a vowel', () => {
    expect(elementsStartingWithAVowel([
      'apple', 'bapple', 'capple', 'dapple', 'epple', 'fepple',
      'gepple', 'hepple', 'ipple', 'jipple', 'kipple', 'lipple',
      'mipple', 'nipple', 'opple', 'popple', 'qopple', 'ropple',
      'sopple', 'topple', 'upple', 'vupple', 'wupple', 'xupple',
      'yupple', 'zupple',
    ])).toEqual(['apple', 'epple', 'ipple', 'opple', 'upple']);
  });

  it('is case insensitive', () => {
    expect(elementsStartingWithAVowel([
      'Apple', 'Bapple', 'Capple', 'Dapple', 'Epple', 'Fepple',
      'Gepple', 'Hepple', 'Ipple', 'Jipple', 'Kipple', 'Lipple',
      'Mipple', 'Nipple', 'Opple', 'Popple', 'Qopple', 'Ropple',
      'Sopple', 'Topple', 'Upple', 'Vupple', 'Wupple', 'Xupple',
      'Yupple', 'Zupple',
    ])).toEqual(['Apple', 'Epple', 'Ipple', 'Opple', 'Upple']);
  });
});

describe('removeSpaces', () => {
  it('returns the string with the space characters removed', () => {
    expect(removeSpaces('this string has spaces')).toEqual('thisstringhasspaces');
    expect(removeSpaces(' this one has sneaky   spaces ')).toEqual('thisonehassneakyspaces');
  });
});

describe('sumNumbers', () => {
  it('returns the sum of the numbers in the array', () => {
    expect(sumNumbers([1, 3, 5, 6, 2, 8])).toEqual(25);
  });
});

describe('sortByLastLetter', () => {
  it('sorts the string by the last character', () => {
    expect(sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen']))
      .toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
  });
});

describe('createPerson', () => {
  it('creates an object with the given name and age properties', () => {
    expect(createPerson('Fred', 79)).toEqual({
      name: 'Fred',
      age: 79,
    });

    expect(createPerson('Dilys', 50)).toEqual({
      name: 'Dilys',
      age: 50,
    });
  });
});

describe('getName', () => {
  it('returns the name property of the object', () => {
    expect(getName({
      name: 'Fred',
      age: 79,
    })).toEqual('Fred');
  });
});

describe('getProperty', () => {
  it('returns the given property', () => {
    expect(getProperty('age', {
      name: 'Fred',
      age: 79,
    })).toEqual(79);
  });
});

describe('hasProperty', () => {
  const fred = {
    name: 'Fred',
    age: 79,
  };

  expect(hasProperty('age', fred)).toBe(true);
  expect(hasProperty('favouriteColour', fred)).toBe(false);
});

describe('isOver65', () => {
  it('returns true if the person is aged over 65', () => {
    const jim = {
      name: 'Jim',
      age: 66,
    };

    const dilys = {
      name: 'Dilys',
      age: 50,
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };

    expect(isOver65(jim)).toBe(true);
    expect(isOver65(dilys)).toBe(false);
    expect(isOver65(marjorie)).toBe(false);
  });
});

describe('getAges', () => {
  it('returns the ages of each person in the array', () => {
    const jim = {
      name: 'Jim',
      age: 66,
    };

    const dilys = {
      name: 'Dilys',
      age: 50,
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };

    expect(getAges([jim, dilys, marjorie])).toEqual([66, 50, 65]);
  });
});

describe('findByName', () => {
  it('returns the person with the given name', () => {
    const jim = {
      name: 'Jim',
      age: 66,
    };

    const dilys = {
      name: 'Dilys',
      age: 50,
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };

    expect(findByName('Jim', [jim, dilys, marjorie])).toBe(jim);
    expect(findByName('Marjorie', [jim, dilys, marjorie])).toBe(marjorie);
  });
});

describe('findHondas', () => {
  it('returns a list of cars manufactured by Honda', () => {
    const car1 = {
      manufacturer: 'Honda',
      year: 1997,
      colour: 'blue',
    };

    const car2 = {
      manufacturer: 'Fiat',
      year: 2010,
      colour: 'green',
    };

    const car3 = {
      manufacturer: 'Toyota',
      year: 2017,
      colour: 'blue',
    };

    const car4 = {
      manufacturer: 'Honda',
      year: 2001,
      colour: 'red',
    };

    expect(findHondas([car1, car2, car3, car4])).toEqual([car1, car4]);
  });
});

describe('averageAge', () => {
  it('returns the average age of the people in the list', () => {
    const john = {
      name: 'John',
      age: 60,
    };

    const eric = {
      name: 'Eric',
      age: 50,
    };

    const gary = {
      name: 'Gary',
      age: 25,
    };

    expect(averageAge([john, eric, gary])).toBe(45);
  });
});

describe('createTalkingPerson', () => {
  it('returns a person who can introduce themselves', () => {
    const bill = createTalkingPerson('Bill', 40);
    expect(bill).toEqual({
      name: 'Bill',
      age: 40,
      introduce: expect.any(Function),
    });

    expect(bill.introduce('Fred')).toEqual('Hi Fred, my name is Bill and I am 40!');
  });
});

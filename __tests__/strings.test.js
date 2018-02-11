import {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} from '../src/strings';

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

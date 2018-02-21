export const sayHello = (string) => {
    return 'Hello, ' + string + '!';
    // returns Hello with the given string!
    // expect(sayHello('MCR Codes')).toEqual('Hello, MCR Codes!')
};

export const uppercase = (string) => {
    return string.toUpperCase(string);
    // returns the uppercased string
    // expect(uppercase('abc')).toEqual('ABC')
};

export const lowercase = (string) => {
    return string.toLowerCase(string);
    // returns the lowercased string
    // expect(lowercase('ABC')).toEqual('abc')
};

export const countCharacters = (string) => {
   return string.length;
    // returns the number of characters in the string
    // expect(countCharacters('fsfsgsfdg')).toEqual(9);
};

export const firstCharacter = (string) => {
    return string[0];
    // returns the first character of the string
    // expect(firstCharacter('ABC')).toEqual('A')
};

export const firstCharacters = (string, n) => {
    return string.substr(string, n);
    // returns the first n characters of the string
    // expect(firstCharacters('sd32fg45', 4)).toEqual('sd32')
};
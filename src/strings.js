const sayHello = (string) => 'Hello, ' + string + '!'

const uppercase = (string) => string.toUpperCase(string)

const lowercase = (string) => string.toLowerCase(string)

const countCharacters = (string) => string.length

const firstCharacter = (string) => string.charAt(0)

const firstCharacters = (string, n) => string.slice(0,n)


module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
}

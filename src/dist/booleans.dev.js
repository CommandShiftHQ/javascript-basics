"use strict";

/* eslint-disable func-names */
var negate = function negate(a) {
  // your code here
  return !a;
};

var both = function both(a, b) {
  // your code here
  return a && b;
};

var either = function either(a, b) {
  // your code here
  return a || b;
};

var none = function none(a, b) {
  // your code here
  return !a && !b;
};

var one = function one(a, b) {
  // your code here
  if (a || b || a) {
    return true;
  }

  return false;
};

var truthiness = function truthiness(a) {
  // your code her
  if (a) {
    return true;
  }

  return false;
};

var isEqual = function isEqual(a, b) {
  // your code here
  return a === b;
};

var isGreaterThan = function isGreaterThan(a, b) {
  // your code here
  return a > b;
};

var isLessThanOrEqualTo = function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
};

var isOdd = function isOdd(a) {
  // your code here
  if (a % 2 !== 0) {
    return true;
  }

  return false;
};

var isEven = function isEven(a) {
  // your code here
  if (a % 2 == 0) {
    return true; // eslint-disable-next-line no-else-return
  } else {
    return false;
  }
};

var isSquare = function isSquare(a) {
  // your code here
  return Math.sqrt(a) === Math.round(Math.sqrt(a));
};

var startsWith = function startsWith(string, _char) {
  // your code here
  if (string.startsWith(_char)) {
    return true;
  }

  return false;
};

var containsVowels = function containsVowels(string) {
  var vowels = ["a", "e", "i", "o", "u"]; // convert vowels to same casing 

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = string.toLowerCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var letterInString = _step.value;

      if (vowels.includes(letterInString)) {
        return true;
      }

      return false;
    } // your code here

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var isLowerCase = function isLowerCase(string) {// your code here
};

module.exports = {
  negate: negate,
  both: both,
  either: either,
  none: none,
  one: one,
  truthiness: truthiness,
  isEqual: isEqual,
  isGreaterThan: isGreaterThan,
  isLessThanOrEqualTo: isLessThanOrEqualTo,
  isOdd: isOdd,
  isEven: isEven,
  isSquare: isSquare,
  startsWith: startsWith,
  containsVowels: containsVowels,
  isLowerCase: isLowerCase
}; // program to count the number of vowels in a string
// defining vowels
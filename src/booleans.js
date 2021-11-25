function negate(a) {
  if (a === true) {
    return false;
  } else if (a === false) {
    return true;
  }
};

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if (a !== true && b !== true) {
    return true;
  } else {
    return false;
  }
};


function one(a, b) {
  if (a === true && b !== true) {
    return true;
  } else if (b === true && a !== true) {
    return true;
  } else {
    return false;
  }
};


function truthiness(a) {
  if (a !== true) {
    return false;
  } else {
    return true;
  }
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};


function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
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
  isLowerCase
};

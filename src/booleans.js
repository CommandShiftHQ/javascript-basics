function negate(a) {
  if (a === true) {
    return false;
  } else {
    return true;
  }
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === true && b === false) {
    return false;
  } else if (a === false && b === true) {
    return false;
  } else {
    return false;
  }
}


function either(a, b) {
  if (a === true || b === true) {
    return true;
  } else if (a === true || b === false) {
    return false;
  } else if (a === false || b === true) {
    return false;
  } else if (a === false || b === false) {
    return false;
  }
};

function none(a, b) {
  if (
    (a == true && b === true) ||
    (a === true && b === false) ||
    (a === false && b === true)
  ) {
    return false;
  } else if (a === false && b === false) {
    return true;
  }
};

function one(a, b) {
  if ((a == true && b === true) || (a === false && b === false)) {
    return false;
  } else if (a === true || b === false || (a === false || b === true)) {
    return true;
  }
}

function truthiness(a) {
  if (a === '' || a === 0 || a === null || a === undefined || !!a === !!NaN) {
    return false;
  } else {
    return true;
  }
}


function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function isOdd(a) {
  if (a % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  console.log(char);
  if (char === string[0]) {
    return true;
  } else {
    return false;
  }
}

function containsVowels(string) {
  if (string.match(/[ieoua]/gi)) {
    return true;
  } else {
    return false;
  }
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

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

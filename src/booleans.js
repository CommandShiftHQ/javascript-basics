const negate = (a) => {
    if (a === true) {
        return false
    } else {
        return true
    }
}; // your code here

const both = (a, b) => {
    if (a === true && b === true) {
        return true
    } else {
        return false
    } // your code here
};

const either = (a, b) => {
    if (a === true || b === true) {
        return true
    } else {
        return false
    }
    // your code here
};

const none = (a, b) => {
    if (a !== true && b !== true) {
        return true
    } else {
        return false
    }
    // your code here
};

const one = (a, b) => {
    if ((a === true && b !== true) || (a !== true && b === true)) {
        return true
    } else {
        return false
    }
    // your code here
};

const truthiness = (a) => {
    return Boolean(a)
};

const isEqual = (a, b) => {
    return Boolean(a === b)
        // your code here
};

const isGreaterThan = (a, b) => {
    return Boolean(a > b)
        // your code here
};

const isLessThanOrEqualTo = (a, b) => {
    return Boolean(a <= b)
        // your code here
};

const isOdd = (a) => {
        if (a === 0 || a % 2 === 0) {
            return false
        } else {
            return true
        }
    }
    // your code here

const isEven = (a) => {
    if (a === 0 || a % 2 === 0) {
        return true
    } else {
        return false
    }
    // your code here
};

const isSquare = (a) => {
    if (Number.isInteger(Math.sqrt(a)) && Math.sqrt(a) >= 0) {
        return true
    } else {
        return false
    }
    // your code here
};

const startsWith = (char, string) => {
    if (char === string.charAt(0)) {
        return true
    } else {
        return false
    }
    // your code here
};

const containsVowels = (string) => {

    if (string.match(/[aeiou]/i)) {
        return true
    } else {
        return false
    }
    //your code here
};

const isLowerCase = (string) => {
    if (string === string.toLowerCase(string)) {
        return true
    } else {
        return false
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
}
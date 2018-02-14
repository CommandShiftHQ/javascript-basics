export const add = (a, b) => {
    return a + b;
    // adds the two numbers together
    // expect(add(2, 1)).toEqual(3)
};

export const subtract = (a, b) => {
    return a - b;
    // subtracts the second number from the first
    // expect(subtract(2, 1)).toEqual(1)
};

export const multiply = (a, b) => {
    return a * b;
    // multiplies the two numbers together
    // expect(multiply(10, 3)).toEqual(30)
};

export const divide = (a, b) => {
    return a / b;
    // divides the first number by the second number
    // expect(divide(20, 5)).toEqual(4)
};

export const power = (a, b) => {
    return Math.pow(a, b);
    // returns the first number to the power of the second
    // expect(power(5, 2)).toEqual(25)
};

export const round = (a) => {
    return Math.round(a);
    // rounds the number to the nearest integer
    // expect(round(2.1)).toEqual(2)
};

export const roundUp = (a) => {
    return Math.ceil(a);
    // rounds the number up to the nearest integer
    // expect(roundUp(2.1)).toEqual(3)
};

export const roundDown = (a) => {
    return Math.floor(a);
    // rounds the number down to the nearest integer
    // expect(roundDown(2.1)).toEqual(2)
};

export const absolute = (a) => {
    return Math.abs(a);
    // returns the absolute value of the number
    // expect(absolute(-1)).toEqual(1)
};

export const quotient = (a, b) => {
    return parseInt(a / b);
    // returns the quotient from dividing the first number by the second number
    // expect(quotient(10, 3)).toEqual(3)
};

export const remainder = (a, b) => {
    return a % b;
    // returns the remainder when dividing the first number by the second number
    // expect(remainder(10, 3)).toEqual(1)
};

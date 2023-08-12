const factorial = require('./factorial');

describe('Factorial function', () => {
    test('factorial function returns the correct values', () => {
        expect(factorial(5)).toEqual(120);
        expect(factorial(0)).toEqual(0);
        expect(factorial(1)).toEqual(1);
        expect(factorial(2)).toEqual(2);
        expect(factorial(10)).toEqual(3628800);
    });
});
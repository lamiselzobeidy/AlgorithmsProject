function factorial(number) {
    console.log(number);

    if (number <= 0) {
        return 0;
    }
    if (number === 1 || number === 2) {
        return number;
    }

    return number * factorial(number - 1);
}

console.log(factorial(10));
module.exports = factorial;
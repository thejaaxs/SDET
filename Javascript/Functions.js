// Function to check whether a number is prime
function isPrime(number) {
    if (!Number.isInteger(number) || number < 2)
        return false;
    for (let divisor = 2; divisor * divisor <= number; divisor++) {
        if (number % divisor === 0)
            return false;
    }
    return true;
}
console.log(isPrime(13));
console.log(isPrime(15));

// Calculate Factorial 
function calculateFactorial(number) {
    if (!Number.isInteger(number) || number < 0)
        throw new Error('Enter a Non-Negative Integer');

    let result = 1;
    for (let factor = 2; factor <= number; factor++)
        result *= factor;
    return result;
}
console.log(calculateFactorial(5));

// Write the same function as declaration, Arrow Function and expression !
function squareDeclaration(number) {
    return number * number;
}
const squareExpression = function (number) {
    return number * number;
}
const squareArrow = number => number * number;
console.log(squareDeclaration(4));
console.log(squareArrow(4));
console.log(squareExpression(4));

// Accept Unlimited Arguments with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// Return another function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}
const double = createMultiplier(5);
// here the inner function will be assigned to double
console.log(double(2));
const triple = createMultiplier(10);
console.log(triple(3));

// Accept another function as an argumemt 
function transformValue(value, callBack) {
    if (typeof callBack !== 'function')
        throw new Error('Callback must be a function');
    return callBack(value);
}
console.log(transformValue(5, number => number ** 2));


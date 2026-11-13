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

// Reusable Calculator
function calculate(a, operator, b) {
    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => {
            if (y === 0)
                throw new Error('Cannot Divide By Zero!');
            return x / y;
        }
    }
    if (!Object.hasOwn(operations, operator)) {
        throw new Error(`Unsupported Operator : ${operator}`);
    }
}
console.log(calculate(10, "+", 5));
console.log(calculate(10, "*", 5));

// Remove duplicate values from an array 
function removeDuplicates(values) {
    return [...new Set(values)];
}
console.log(removeDuplicates([1, 1, 1, 3, 3, 3, 4, 5, 6, 2]));

// Implement a basic map()
function myMap(array, callback, thisArg) {
    if (!Array.isArray(array) || typeof callback !== 'function')
        throw new Error('Expected an Array and a callback function');

    const result = new Array(array.length);
    for (let index = 0; index <= array.length; index++) {
        if (index in array) {
            result[index] = callback.call(thisArg, array[index], array, index);
        }
    }
    return result;
}
console.log(myMap([1, 2, 3], number => number * 2));

// Implement a basic Filter()
function myFilter(array, callback, thisArg) {
    if (!Array.isArray(array) || typeof callback !== 'function')
        throw new Error('Expected an Array & Callback function');
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (index in array && callback.call(thisArg, array[index], array, index))
            result.push(array[index]);
    }
    return result;
}
console.log(myFilter([1, 2, 3, 4, 5, 6], number => number % 2 === 0))
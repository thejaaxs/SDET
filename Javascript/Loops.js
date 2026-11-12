// Print Number From 1 to 100
function printNumber1to100() {
    for (let number = 1; number <= 100; number++) {
        console.log(number + ' ');
    }
}
printNumber1to100();

// Print multiplication tables from 1 to 20 (each table goes up to 10)
function printMultiplicationTable() {
    for (let number = 1; number <= 20; number++) {
        console.log(`\nTable Of ${number}\n`);

        for (let multiplier = 1; multiplier <= 10; multiplier++) {
            console.log(`${number} X ${multiplier} = ${number * multiplier}`);
        }
    }
}
printMultiplicationTable();

// Calculate the factorial of a number
function calculateFactorial(number) {
    if (number < 0 || !Number.isInteger(number))
        throw new Error('Enter Non-Negative Number')
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(3));
console.log(calculateFactorial(1));

// Reverse an integer, keeping its sign
function reverseNumber(number) {
    if (!Number.isInteger(number))
        throw new Error('Enter An Integer !');
    let reversed = 0;
    const sign = number < 0 ? -1 : 1;
    number = Math.abs(number);
    while (number > 0) {
        const digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    return sign * reversed;
}
console.log(reverseNumber(736));
console.log(reverseNumber(-736));

// Find the sum of an Integer's
function sumOfDigits(number) {
    if (!Number.isInteger(number))
        throw new Error('Enter an Integer !');

    number = Math.abs(number);
    let sum = 0;
    while (number !== 0) {
        const digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(`The Sum Of Digit is : ${sumOfDigits(460)}`);

// Check Whether a number is prime
function isPrime(number) {
    if (!Number.isInteger(number) || number < 2)
        return false;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0)
            return false;
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(10));

// Print the first 'count' of Fibonacci Sequence
function printFibonacci(count) {
    if (!Number.isInteger(count) || count < 0)
        throw new Error('Enter An Integer');
    let previous = 0;
    let current = 1;
    for (let index = 0; index < count; index++) {
        console.log(previous + ' ');
        [previous, current] = [current, previous + current];
    }
}
printFibonacci(7);

// Check whether an integer is a palindrome
function isPalindrome(number) {
    if (!Number.isInteger(number) || number < 0)
        return false;
    return number == reverseNumber(number);
}
console.log(isPalindrome(12345));
console.log(isPalindrome(123454321));

function printPyramid(rows) {
    for (let row = 1; row <= rows; row++) {
        let line = "";
        for (let space = 1; space <= rows - row; space++) {
            line += " ";
        }
        for (let star = 1; star <= 2 * row - 1; star++) {
            line += "*";
        }
        console.log(line);
    }
}
printPyramid(4);

// Find the GCD of two integers using the Euclidean algorithm
function gcd(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b))
        throw new Error('Enter 2 Integers !');
    if (a === 0 && b === 0)
        throw new Error('GCD is undefined when both numbers are Zero !');

    a = Math.abs(a);
    b = Math.abs(b);

    while (b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
console.log(gcd(48, 18));
console.log(gcd(60, 36));
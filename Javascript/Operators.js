// Check whether a number is even or odd !
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(10));
console.log(evenOrOdd(3));

// Find the Largest Of Three Numbers !
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}
console.log(largestOfThree(10, 20, 30));
console.log(largestOfThree(30, 50, 10));
console.log(largestOfThree(40, 10, 20));

// Check whether a number is divisble by 5 & 11 
function divisibleBy5And11(number) {
    return (number % 5 === 0 && number % 11 === 0);
}
console.log(divisibleBy5And11(55));
console.log(divisibleBy5And11(50));
console.log(divisibleBy5And11(121));

// Calculate the Remainder without using the %
function remainder(dividend, divisor) {
    if (divisor === 0) throw new Error('Divisor Cannot Be Zero !');
    return dividend - Math.trunc(dividend / divisor) * divisor;
}
console.log(remainder(10, 5));
console.log(remainder(15, 2));

// Build a Basic Calculator
function calculate(a, operator, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0)
                throw new Error('Cannot Divide By Zero !');
            return a / b;
        default:
            throw new Error(`Unsupported Operator : ${operator}`);
    }
}
console.log(calculate(10, '+', 20));
console.log(calculate(20, '-', 10));
console.log(calculate(10, '*', 5));
console.log(calculate(10, '/', 2));

// Find maximum of 2 numbers using ternery Operator
function maxOfTwo(a, b) {
    return a >= b ? a : b;
}
console.log(maxOfTwo(10, 20));
console.log(maxOfTwo(100, 50));

// Check whether a person is eligible to vote or not !
function eligibleToVote(age) {
    return age >= 18 ? 'Eligible To Vote' : 'Not Eligible To Vote';
}
console.log(eligibleToVote(10));
console.log(eligibleToVote(45));

// 8. Calculate the total price after applying a discount percentage
function priceAfterDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

// Check whether a number falls within an inclusive range
function isWithinRange(number, minimum, maximum) {
    return number >= minimum && number <= maximum;
}
console.log(isWithinRange(100, 0, 300));
console.log(isWithinRange(500, 100, 200));

// 10. Password condition: at least 8 characters and contains a digit
function isValidPassword(password) {
    return password.length >= 8 && /\d/.test(password);
}
console.log(isValidPassword('Thaneshwara'));
console.log(isValidPassword('Pransesh@2001'));
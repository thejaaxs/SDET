// Swap 2 Variables Without Using a Third Variable 
function swapUsingAddition(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(`The Swapping Of 2 Numbers : ${swapUsingAddition(10, 20)}`);

// There is De-Structuring Approach
function swapUsingDestructuring(a, b) {
    return [b, a];
}
console.log(`Swap Using Destructuring : ${swapUsingDestructuring(10, 30)}`);

// Swap Using Temporary Variable
function swapUsingTemporaryVariable(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(`Swap Using Temporary Variable : ${swapUsingTemporaryVariable(50, 100)}`);

// The Area Of Rectangle Problem
function areaOfRectangle(length, breadth) {
    if (length <= 0 || breadth <= 0)
        throw new Error(`Length & Breadth should be Positive`);
    return length * breadth;
}
console.log(`The Area Of Rectangle is : ${areaOfRectangle(8, 4)}`);
console.log(`The Area Of Rectangle is : ${areaOfRectangle(2.5, 3)}`);

// Simple Interest Formula
function calculateSimpleInterest(principal, rateOfInt, time) {
    return (principal * rateOfInt * time) / 100;
}
console.log(`Simple Interest : ${calculateSimpleInterest(1000, 5, 2)}`);

// Convert Celsius To Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(`Fahrenheit : ${celsiusToFahrenheit(25)}'F`);

// Convert TotalSeconds to hours, minutes, seconds
function convertSeconds(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    return { hours, minutes, seconds };
}
console.log(`${JSON.stringify(convertSeconds(3665))}`);

// Rotate the Values Of Three Variables
function rotateThreeValues(a, b, c) {
    return [c, a, b];
}
console.log(`Rotated Values : ${rotateThreeValues(10, 20, 30)}`);

// Calculate Sum & Average Of 5 Numbers 
function calculateSumAndAverage(a, b, c, d, e) {
    const sum = a + b + c + d + e;
    const average = sum / 5;
    return { sum, average };
}
console.log(`Sum & Average : ${JSON.stringify(calculateSumAndAverage(10, 20, 30, 40, 50))}`);

// Building a counter using let 
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
let count = createCounter();
console.log(count());
console.log(count());

// Var - Resassigned & Redeclaration 
var oldValue = 30;
var oldValue = 20;
oldValue = 10;
console.log("Var : ", oldValue);

// Let Reassigned & Re-declaration
let currentValue = 50;
currentValue = 20;
console.log("Let : ", currentValue);
if (true) {
    let blockValue = 50;
    console.log('Block let : ', blockValue);
}
// Reference Error
// console.log(`Block Let : `,blockValue) 

// const is scoped strictly and cannot be re-defined
const fixedValue = 10;
console.log('Const : ', fixedValue);
// fixedValue = 200;
// TypeError
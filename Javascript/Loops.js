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
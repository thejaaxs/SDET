// Check Postive, Negative Or Zero !
function checkSign(number) {
    if (number < 0)
        return 'Negative';
    else if (number > 0)
        return 'Positive';
    else
        return 'Zero !';
}
console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));

// Largest Among Three Numbers 
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}
console.log(largestOfThree(10, 20, 30))
console.log(largestOfThree(20, 50, 30))
console.log(largestOfThree(80, 10, 20));

// Check Leap Year
function isLeapYear(year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}
console.log(isLeapYear(2026));
console.log(isLeapYear(2028));

// Grade Calculator ( Marks Out Of 100 )
function getGrade(marks) {
    if (marks < 0 && marks > 100) throw new Error('Marks must be between 0 & 100');
    if (marks >= 90) return 'A';
    else if (marks >= 80) return 'B';
    else if (marks >= 70) return 'C';
    else if (marks >= 60) return 'D';
    else return 'F';
}
console.log(getGrade(50));
console.log(getGrade(100));
console.log(getGrade(75));
console.log(getGrade(30));

// 5. Electricity bill calculator (illustrative progressive rates)
function calculateElectricityBill(units) {
    if (units < 0)
        throw new Error('Units Cannot Be Negative');
    if (units <= 100) return units * 1.5;
    else if (units <= 200) return 100 * 1.5 + (units - 100) * 2.5;
    else if (units <= 500) return 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
    else return 100 * 1.5 + 100 * 2.5 + 300 * 4 + (units - 500) * 6;
}
console.log(calculateElectricityBill(400));
// console.log(calculateElectricityBill(-100));

// 6. Check whether a character is a vowel or consonant
function checkLetter(character) {
    if (!/^[a-z]$/i.test(character))
        throw new Error('Enter a Single Alphabetic Character');

    if ("aeiou".includes(character.toLowerCase()))
        return 'Vowel';
    return 'Consonant';
}
console.log(checkLetter('a'));
console.log(checkLetter('f'));

// Loan Eligibility 
function isElgigibleForLoan(age, monthlyIncome, creditScore) {
    if (age < 0 || age > 60) return false;

    else if (monthlyIncome < 30000) return false;
    else if (creditScore < 700) return false;
    else return true;
}
console.log(isElgigibleForLoan(30, 45000, 980));
console.log(isElgigibleForLoan(70, 5000, 680));

// 10. Login validation by comparing supplied credentials
function validateLogin(username, password, validUsername, validPassword) {
    if (username === "" || password === "") return 'Username & Password Cannot Be Empty';
    else if (username === validUsername && password === validPassword) return 'Login Successfull';
    else return 'Login Failed || Invalid UserName & Password';
}

// Income Tax Calculator
function calculateIncomeTax(income) {
    if (income < 0) throw new Error('Income Cannot Be Negative');

    if (income <= 300000)
        return 0;
    else if (income <= 700000)
        return (income - 300000) * 0.05;
    else if (income <= 1000000)
        return 20000 + (income - 700000) * 0.10;
    else if (income <= 1200000)
        return 50000 + (income - 1000000) * 0.15;
    else if (income <= 1500000)
        return 80000 + (income - 1200000) * 0.20;
    else
        return 140000 + (income - 1500000) * 0.30;
}
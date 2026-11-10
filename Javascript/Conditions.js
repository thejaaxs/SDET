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
console.log(calculateElectricityBill(-100));

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
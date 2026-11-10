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
console.log(largestOfThree(10,20,30))
console.log(largestOfThree(20,50,30))
console.log(largestOfThree(80,10,20));
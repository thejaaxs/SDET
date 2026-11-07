// Identify the data Type of 20 values
const values = [
    20, "Hello", NaN, Infinity, function () { },
    true, false, 10n, null, undefined, {}, [],
    Symbol("id"), new Date(), new Map(),
    new Set(), /test/, new Error('Error'), Math, arguments
];

values.forEach((value, index) => {
    console.log(`${index + 1} : ${typeof (value)}`);
})

// Convert the String to Number 
// Three ways , Number, parseInt, parseFloat
const numericString = "123.45";
console.log(`${Number(numericString)}`);
console.log(`${parseInt(numericString)}`);
console.log(`${parseFloat(numericString)}`);

// Number to String
// Template Literals is used to convert to string 

function stringToNumber(number) {
    console.log(String(number));
    console.log(`${number}`);
    console.log(number.toString());

    return;
}
stringToNumber(123);

// Check Whether a value is NaN
function isNanValue(value) {
    return typeof value === "number" && Number.isNaN(value);
}
console.log(isNanValue(NaN));
console.log(isNanValue("NaN"));
// console.log(isNan("NaN"));

// Check Whether a value is an Array
function isArray(value) {
    return Array.isArray(value);
}
console.log(isArray([1, 2, 3]));
console.log(isArray("Array"));
console.log(isArray({ 0: 1 }));

// Check Null or Undefined
function classifyValue(value) {
    if (value === null) return null;
    if (value === undefined) return undefined;
    return typeof value;
}
console.log(classifyValue(null));
console.log(classifyValue(undefined));
console.log(classifyValue("Javascript"));

// Primitive Values are copied by Value
// Reference Values are copied by Reference
let firstNumber = 10;
let secondNumber = firstNumber;
secondNumber = 20;
console.log(firstNumber, secondNumber);

let firstUser = { name: "Manush" };
let secondUser = firstUser;

console.log(firstUser.name);
console.log(secondUser.name);

secondUser.name = "Thanush";

console.log(firstUser.name); // Referenced Value !
console.log(secondUser.name);

// Deep Copy Of Nested Object
const original = {
    name: 'Thanos',
    address: {
        city: "Mangalore",
        coordinates: {
            lattitude: 19.076
        }
    },
    skills: ["Javascript", "Playwright"]
};

const copied = structuredClone(original);
// structuredClone handles nested objects and arrays without converting them !

copied.address.city = "Kundapura";
copied.address.coordinates.lattitude = 28.7041;
copied.skills.push("Typescript");

// Original
console.log(original.address.city);
console.log(original.skills);

// Copied
console.log(copied.address.city);
console.log(copied.skills);

// Truthy Values & Falsy Values 
const falsyValues = [false, 0, -0, 0n, null, undefined, NaN];
const truthyValues = ["0", "false", [], {}, 1, -1, Infinity, () => { }];

for (const value of falsyValues)
    console.log(value, Boolean(value));

for (const value of truthyValues)
    console.log(value, Boolean(value));

// Validate an input type
function validateType(value, expectedType) {
    if (expectedType === "array") return Array.isArray(value);
    if (expectedType === "null") return value === null;
    if (expectedType === "integer") return Number.isInteger(value);

    return typeof value === expectedType;
}
console.log(validateType(10, "number"));
console.log(validateType("10", "number"));
console.log(validateType([1, 2], "array"));
console.log(validateType(null, "null"));
console.log(validateType(10, "integer"));
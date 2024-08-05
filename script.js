// Declare variables of different data types
var name = "Siyabonga Ntshingila"; // String
var age = 28; // Number
var isStudent = true; // Boolean

// Print the variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Call the add function and print the result
var sum = add(5, 3);
console.log("Sum:", sum);

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Call the subtract function and print the result
var difference = subtract(10, 4);
console.log("Difference:", difference);

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed";
    }
    return a / b;
}

// Call the divide function and print the result
var quotient = divide(20, 5);
console.log("Quotient:", quotient);

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Call the multiply function and print the result
var product = multiply(4, 7);
console.log("Product:", product);

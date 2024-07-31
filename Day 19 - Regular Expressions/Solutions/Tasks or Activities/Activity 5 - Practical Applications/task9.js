/**
 * Day 19 - Regular Expressions
 * 
 * Activity 5 - Practical Applications
 *  - Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
 */


// Define the regular expression pattern to validate a simple password
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/;

// Define the test password
const password = 'Bharat@123';

// Test the password against the regular expression
const isValid = regex.test(password);

// Log whether the password is valid
console.log(`Password is valid: ${isValid}`); // Output: Password is valid: true
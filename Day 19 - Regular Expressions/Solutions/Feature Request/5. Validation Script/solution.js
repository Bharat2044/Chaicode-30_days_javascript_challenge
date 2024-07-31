/**
 * Day 19 - Regular Expressions
 * 
 * Feature Request: Validation Script
 *  - Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
 */


// Define the regular expression pattern to validate a password
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// Define the test password
const password = 'Password123';

// Test the password against the regular expression
const isPasswordValid = passwordRegex.test(password);

// Log whether the password is valid
console.log(`Password is valid: ${isPasswordValid}`); // Output: Password is valid: true


// Define the regular expression pattern to validate a URL
const urlRegex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,}){1,2}$/;

// Define the test URL
const url = 'https://www.google.com';

// Test the URL against the regular expression
const isUrlValid = urlRegex.test(url);

// Log whether the URL is valid
console.log(`URL is valid: ${isUrlValid}`); // Output: URL is valid: true
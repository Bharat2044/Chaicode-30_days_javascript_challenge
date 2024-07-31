/**
 * Day 19 - Regular Expressions
 * 
 * Activity 3 - Grouping and Capturing
 *  - Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
 */


// Define the regular expression pattern to capture the area code, central office code, and line number
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Define a US phone number in the format (123) 456-7890
const phoneNumber = '(123) 456-7890';

// Use the match() method to find the captures
const captures = phoneNumber.match(regex);

// Log the captures
console.log(captures); // Output: [ '(123) 456-7890', '123', '456', '7890', index: 0, input: '(123) 456-7890', groups: undefined ]
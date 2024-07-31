/**
 * Day 19 - Regular Expressions
 * 
 * Feature Request: Grouping and Capturing Script
 *  - Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
 */


// Define the regular expression pattern to capture the area code, central office code, and line number from a US phone number format
const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Define a US phone number in the format (123) 456-7890
const phoneNumber = '(123) 456-7890';

// Use the match() method to find the captures
const phoneCaptures = phoneNumber.match(phoneRegex);

// Log the captures
console.log(phoneCaptures); // Output: [ '(123) 456-7890', '123', '456', '7890' ]
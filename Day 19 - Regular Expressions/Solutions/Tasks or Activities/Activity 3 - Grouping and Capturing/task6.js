/**
 * Day 19 - Regular Expressions
 * 
 * Activity 3 - Grouping and Capturing
 *  - Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
 */


// Define the regular expression pattern to capture the username and domain from an email address
const regex = /(\w+)@(\w+\.\w+)/;

// Define an email address
const email = 'bharat@gmail.com';

// Use the match() method to find the captures
const captures = email.match(regex);

// Log the captures
console.log(captures); 
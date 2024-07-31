/**
 * Day 19 - Regular Expressions
 * 
 * Activity 1 - Basic Regular Expressions
 *  - Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
 */


// Define the regular expression pattern to match the word "JavaScript"
const regex = /JavaScript/g;

// Define the test string
const testString = 'JavaScript is a popular programming language. JavaScript is used for web development.';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ 'JavaScript', 'JavaScript' ]
/**
 * Day 19 - Regular Expressions
 * 
 * Activity 1 - Basic Regular Expressions
 *  - Task 2: Write a regular expression to match all digits in a string. Log the matches.
 */


// Define the regular expression pattern to match all digits
const regex = /\d/g;

// Define the test string with digits
const testString = 'The number 123 is an example of a number with digits.';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ '1', '2', '3' ]



// Define the regular expression pattern to match all digits
const regex2 = /\d+/g;

console.log(testString.match(regex2)); // Output: [ '123' ]
/**
 * Day 19 - Regular Expressions
 * 
 * Feature Request: Character Classes and Quantifiers Script
 *  - Create a script that uses regular expressions to match words with specific characteristics and log the matches.
 */


// Define the regular expression pattern to match words with specific characteristics
const regex = /\b\w{5,}\b/g;

// Define the test string with words of different lengths
const testString = "Hello, World! JavaScript is a popular programming language used for web development.";

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ 'Hello', 'World', 'JavaScript', 'popular', 'programming', 'language', 'development
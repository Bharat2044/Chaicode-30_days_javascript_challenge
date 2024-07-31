/**
 * Day 19 - Regular Expressions
 * 
 * Activity 2 - Character Classes and Quantifiers
 *  - Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
 */


// Define the regular expression pattern to match all words that start with a capital letter
const regex = /\b[A-Z]\w*/g;

// Define the test string with words that start with a capital letter
const testString = 'Hello, World! JavaScript is a popular programming language.';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ 'Hello', 'World', 'JavaScript
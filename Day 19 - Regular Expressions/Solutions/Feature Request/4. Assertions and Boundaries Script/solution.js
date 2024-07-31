/**
 * Day 19 - Regular Expressions
 * 
 * Feature Request: Assertions and Boundaries Script
 *  - Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
 */


// Define the word to match at a specific position
const wordToMatch = 'World';

// Define the regular expression pattern to match a word at a specific position
const regex = new RegExp(`\\b${wordToMatch}\\b`, 'gi');

// Define the test string with words at specific positions
const testString = 'Hello, World! JavaScript is a popular programming language.';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches, handle case where no matches are found
if (matches) {
    console.log(matches);
} else {
    console.log('No matches found.');
}
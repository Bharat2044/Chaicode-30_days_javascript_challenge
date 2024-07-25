/**
 * Day 13 - Modules
 * 
 * Activity 2 - Named and Default Exports
 *  - Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
 */


// Import the greet function from the greetModule
const greet = require('./greetModule');

// Define a name
const name = 'Bharat';

// Call the greet function and log the result
let greeting = greet(name);
console.log(greeting);
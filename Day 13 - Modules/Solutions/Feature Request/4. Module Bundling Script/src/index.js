/**
 * Day 13 - Modules
 * 
 * Feature Request: Module Bundling Script
 *  - Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
 */


// Import the greet function from the greetModule
const greet = require('./greetModule');

// Define a name
const name = 'Bharat';

// Call the greet function and log the result
let greeting = greet(name);
console.log(greeting);
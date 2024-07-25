/**
 * Day 13 - Modules
 * 
 * Activity 5 - Module Bundling (Optional)
 *  - Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
 */


// Import the greet function from the greetModule
const greet = require('./greetModule');

// Define a name
const name = 'Bharat';

// Call the greet function and log the result
let greeting = greet(name);
console.log(greeting);
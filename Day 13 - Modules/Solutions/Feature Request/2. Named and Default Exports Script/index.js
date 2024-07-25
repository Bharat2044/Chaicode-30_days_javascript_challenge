/**
 * Day 13 - Modules
 * 
 * Feature Request: Named and Default Exports Script
 *  - Create a script demonstrating both named and default exports and their usage.
 */


// Import the module
const mathModule = require('./mathModule.js');

// Use the properties and methods from the module
console.log(`PI: ${mathModule.PI}`);
console.log(`Add: ${mathModule.add(5, 3)}`);
console.log(`Subtract: ${mathModule.subtract(5, 3)}`);
console.log(`Multiply: ${mathModule.multiply(5, 3)}`);
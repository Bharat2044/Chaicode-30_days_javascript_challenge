/**
 * Day 13 - Modules
 * 
 * Activity 4 - Using Third-Party Modules
 *  - Task 6: Install a third-party module (e.g., `lodash`) using npm. Import and use a function from this module in a script.
 */

/**
 * Create package.json file: 
 *  - npm init -y
 * Install lodash library: 
 *  - npm install lodash
 */


// Import the lodash module
const _ = require('lodash');

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the sum function from lodash
let sum = _.sum(numbers);

// Log the sum of the numbers
console.log(`Sum of numbers: ${sum}`);

// Use the mean function from lodash
let mean = _.mean(numbers);

// Log the mean of the numbers
console.log(`Mean of numbers: ${mean}`);
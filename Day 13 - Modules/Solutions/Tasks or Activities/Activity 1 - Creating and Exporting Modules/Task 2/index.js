/**
 * Day 13 - Modules
 * 
 * Activity 1 - Creating and Exporting Modules
 *  - Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
 */


// Importing the person module
const person = require('./personModule');

// Output the person object
console.log(person);

// Output the person's name
console.log(person.name);

// Output the person's age
console.log(person.age);

// Output the person's greeting
console.log(person.greet());

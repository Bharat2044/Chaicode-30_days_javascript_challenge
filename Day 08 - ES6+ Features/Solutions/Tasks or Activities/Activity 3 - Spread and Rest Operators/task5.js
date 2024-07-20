/**
 * Day 8 - ES6+ Features
 * 
 * Activity 3 - Spread and Rest Operators
 *  - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
 */


let numbers = [1, 2, 3, 4, 5];

let newNumbers = [...numbers, 6, 7, 8];

console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
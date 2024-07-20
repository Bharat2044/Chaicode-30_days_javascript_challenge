/**
 * Day 8 - ES6+ Features
 * 
 * Feature Request: Destructuring Script
 *  - Create a script that uses array and object destructuring to extract values and log them.
 */


// Array Destructuring
const array = [100, 200, 300];
const [firstItem, secondItem] = array;

console.log(`First: ${firstItem}, Second: ${secondItem}`);


// Object Destructuring
const user = { name: "Bharat", age: 21 };
const { name, age } = user;

console.log(`Name: ${name}, Age: ${age}`);

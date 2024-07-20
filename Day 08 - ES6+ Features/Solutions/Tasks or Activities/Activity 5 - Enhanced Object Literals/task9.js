/**
 * Day 8 - ES6+ Features
 * 
 * Activity 5 - Enhanced Object Literals
 *  - Task 9: Create an object with computed property names based on variables and log the object to the console.
 */


let name = "Bharat";
let age = 21;

let person = {
    [name]: "Name",
    [age]: "Age"
};

console.log(person); // { Bharat: 'Name', '21': 'Age' }
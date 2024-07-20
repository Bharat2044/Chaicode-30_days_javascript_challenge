/**
 * Day 8 - ES6+ Features
 * 
 * Activity 5 - Enhanced Object Literals
 *  - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
 */


let name = "Bharat";
let age = 21;

let person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);

person.greet(); // Hello, my name is Bharat and I am 21 years old.
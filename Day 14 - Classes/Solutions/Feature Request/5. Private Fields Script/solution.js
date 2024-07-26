/**
 * Day 14 - Classes
 * 
 * Feature Request: Private Fields Script
 *  - Write a script that defines a class with private fields and methods to manipulate these fields (optional).
 */


// Define the class `Person`
class Person {
    // Define the private fields `#name` and `#age`
    #name;
    #age;

    // Define the constructor with parameters `name` and `age`
    constructor(name, age) {
        // Initialize the private fields `#name` and `#age`
        this.#name = name;
        this.#age = age;
    }

    // Define the method `greet` to log a greeting message
    greet() {
        // Log a greeting message
        console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
    }

    // Define the method `updateName` to update the private field `#name`
    updateName(name) {
        // Update the private field `#name`
        this.#name = name;
    }

    // Define the method `updateAge` to update the private field `#age`
    updateAge(age) {
        // Update the private field `#age`
        this.#age = age;
    }
}

// Create an instance of the class `Person`
const person1 = new Person('Bharat', 21);

// Log the instance
console.log(person1); // Output: Person {}

// Log the private field `#name`
// console.log(person1.#name); // Error: Private field '#name' must be declared in an enclosing class

// Log the private field `#age`
// console.log(person1.#age); // Error: Private field '#age' must be declared in an enclosing class

// Call the method `greet`
person1.greet(); // Output: Hello, my name is Bharat and I am 21 years old.

// Update the private field `#name`
person1.updateName('Deepak');

// Update the private field `#age`
person1.updateAge(20);

// Log the instance
console.log(person1); // Output: Person {}

// Call the method `greet`
person1.greet(); // Output: Hello, my name is Deepak and I am 20 years old.

/**
 * Day 14 - Classes
 * 
 * Activity 1 - Class Definition
 *  - Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.
 */


// Define the class `Person`
class Person {
    // Define the constructor
    constructor(name, age) {
        // Initialize the properties `name` and `age`
        this.name = name;
        this.age = age;
    }

    // Define the method `greet`
    greet() {
        // Return the greeting message
        return `Hello! My name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create an instance of the class `Person`
const person = new Person('Bharat', 21);

// Log the greeting message
console.log(person.greet()); // Output: Hello! My name is Bharat and I am 21 years old.
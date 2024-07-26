/**
 * Day 14 - Classes
 * 
 * Feature Request: Basic Class Script
 *  - Write a script that defines a `Person` class with properties and methods, creates instances, and logs messages.
 */


// Define the class `Person`
class Person {
    // Define the constructor with parameters `name` and `age`
    constructor(name, age) {
        // Initialize the properties `name` and `age`
        this.name = name;
        this.age = age;
    }

    // Define the method `greet` to log a greeting message
    greet() {
        // Log a greeting message
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class `Person`
const person1 = new Person('Bharat', 21);

// Log the instance
console.log(person1); // Output: Person { name: 'Bharat', age: 21 }

// Call the method `greet` on the instance
person1.greet(); // Output: Hello, my name is Bharat and I am 21 years old.
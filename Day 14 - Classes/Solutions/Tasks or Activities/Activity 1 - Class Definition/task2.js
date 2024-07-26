/**
 * Day 14 - Classes
 * 
 * Activity 1 - Class Definition
 *  - Task 2: Add a method to the `Person` class that updates the `age` property and logs the updated age.
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

    // Define the method `updateAge`
    updateAge(newAge) {
        // Update the `age` property
        this.age = newAge;
        // Log the updated age
        console.log(`Updated age: ${this.age}`);
    }
}

// Create an instance of the class `Person`
const person = new Person('Bharat', 21);

// Log the greeting message
console.log(person.greet()); // Output: Hello! My name is Bharat and I am 21 years old.

// Update the age using the `updateAge` method
person.updateAge(22); // Output: Updated age: 22

// Log the greeting message with the updated age
console.log(person.greet()); // Output: Hello! My name is Bharat and I am 22 years
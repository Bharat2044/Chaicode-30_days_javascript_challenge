/**
 * Day 14 - Classes
 * 
 * Activity 4 - Getters and Setters
 *  - Task 7: Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.
 */


// Define the class `Person`
class Person {
    // Define the constructor with parameters `firstName` and `lastName`
    constructor(firstName, lastName) {
        // Initialize the properties `firstName` and `lastName`
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Define the getter method `fullName` to return the full name
    get fullName() {
        // Return the full name
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create an instance of the class `Person`
const person = new Person('Bharat', 'Kumar');

// Log the full name using the getter
console.log(person.fullName); // Output: Bharat Kumar

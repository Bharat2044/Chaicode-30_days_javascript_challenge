/**
 * Day 14 - Classes
 * 
 * Activity 4 - Getters and Setters
 *  - Task 8: Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName`). Update the name using the setter and log the updated full name.
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

    // Define the setter method `fullName` to update the first and last names
    set fullName(name) {
        // Split the full name into first and last names
        const names = name.split(' ');
        // Update the first and last names
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

// Create an instance of the class `Person`
const person = new Person('Bharat', 'Kumar');

// Log the full name using the getter
console.log(person.fullName); // Output: Bharat Kumar

// Update the full name using the setter
person.fullName = 'Deepak Singh';

// Log the updated full name using the getter
console.log(person.fullName); // Output: Deepak Singh
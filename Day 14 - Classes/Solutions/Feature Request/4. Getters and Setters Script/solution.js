/**
 * Day 14 - Classes
 * 
 * Feature Request: Getters and Setters Script
 *  - Create a script that uses getters and setters in a class.
 */


// Define the class `Person`
class Person {
    // Define the constructor with parameters `name` and `age`
    constructor(name, age) {
        // Initialize the properties `name` and `age`
        this._name = name;
        this._age = age;
    }

    // Define the getter for the property `name`
    get name() {
        // Return the value of the property `name`
        return this._name;
    }

    // Define the setter for the property `name`
    set name(value) {
        // Update the value of the property `name`
        this._name = value;
    }

    // Define the getter for the property `age`
    get age() {
        // Return the value of the property `age`
        return this._age;
    }

    // Define the setter for the property `age`
    set age(value) {
        // Update the value of the property `age`
        this._age = value;
    }

    // Define the method `greet` to log a greeting message
    greet() {
        // Log a greeting message
        console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
    }
}

// Create an instance of the class `Person` 
const person1 = new Person('Bharat', 21);

// Log the instance
console.log(person1); // Output: Person { _name: 'Bharat', _age: 21 }

// Log the property `name` using the getter
console.log(person1.name); // Output: Deepak

// Log the property `age` using the getter
console.log(person1.age); // Output: 20 

// Call the method `greet` on the instance
person1.greet(); // Output: Hello, my name is Bharat and I am 21 years old.


// Update the property `name` using the setter
person1.name = 'Deepak';

// Update the property `age` using the setter
person1.age = 20;

// Log the instance
console.log(person1); // Output: Person { _name: 'Deepak', _age: 20 }

// Log the updated property `name` using the getter
console.log(person1.name); // Output: Deepak

// Log the updated property `age` using the getter
console.log(person1.age); // Output: 20 

// Call the method `greet` on the instance
person1.greet(); // Output: Hello, my name is Deepak and I am 20 years old.
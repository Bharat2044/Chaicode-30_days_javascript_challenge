/**
 * Day 14 - Classes
 * 
 * Feature Request: Class Inheritance Script
 *  - Create a script that defines a `Student` class extending `Person`, overrides methods, and logs the results.
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

// Define the class `Student` extending `Person`
class Student extends Person {
    // Define the constructor with parameters `name`, `age`, and `grade`
    constructor(name, age, grade) {
        // Call the super constructor with `name` and `age`
        super(name, age);
        // Initialize the property `grade`
        this.grade = grade;
    }

    // Override the method `greet` to log a student greeting message
    greet() {
        // Log a student greeting message
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }
}

// Create an instance of the class `Person`
const person1 = new Person('Bharat', 21);

// Log the instance
console.log(person1); // Output: Person { name: 'Bharat', age: 21 }

// Call the method `greet` on the instance
person1.greet(); // Output: Hello, my name is Bharat and I am 21 years old.

// Create an instance of the class `Student`
const student1 = new Student('Deepak', 20, 12);

// Log the instance
console.log(student1); // Output: Student { name: 'Deepak', age: 20, grade: 12 }

// Call the method `greet` on the instance
student1.greet(); // Output: Hello, my name is Deepak, I am 20 years old, and I am in grade 12.
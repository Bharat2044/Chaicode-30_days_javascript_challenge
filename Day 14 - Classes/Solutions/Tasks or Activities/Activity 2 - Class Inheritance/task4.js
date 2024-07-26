/**
 * Day 14 - Classes
 * 
 * Activity 2 - Class Inheritance
 *  - Task 4: Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.
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

// Define the class `Student` that extends the `Person` class
class Student extends Person {
    // Define the constructor
    constructor(name, age, studentId) {
        // Call the superclass constructor
        super(name, age);
        // Initialize the property `studentId`
        this.studentId = studentId;
    }

    // Define the method `getStudentId`
    getStudentId() {
        // Return the student ID
        return this.studentId;
    }

    // Override the `greet` method to include the student ID
    greet() {
        // Return the overridden greeting message
        return `Hello! My name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Create an instance of the `Student` class
const student = new Student('Bharat', 21, 'A12345');

// Log the overridden greeting message
console.log(student.greet()); // Output: Hello! My name is Bharat, I am 21 years old, and my student ID is A12345.

// Log the student ID
console.log(student.getStudentId()); // Output: A12345

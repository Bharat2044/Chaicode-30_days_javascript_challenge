/**
 * Day 14 - Classes
 * 
 * Activity 2 - Class Inheritance
 *  - Task 3: Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.
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
}

// Create an instance of the `Student` class
const student = new Student('Bharat', 21, 'A12345');

// Log the student ID
console.log(student.getStudentId()); // Output: A12345

// Log the greeting message
console.log(student.greet()); // Output: Hello! My name is Bharat and I am 21 years

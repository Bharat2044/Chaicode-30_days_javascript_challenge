/**
 * Day 14 - Classes
 * 
 * Activity 3 - Static Methods and Properties
 *  - Task 5: Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
 */


// Define the class `Person`
class Person {
    // Define the constructor
    constructor(name, age) {
        // Initialize the properties `name` and `age`
        this.name = name;
        this.age = age;
    }
    
    // Define a static method `genericGreet`
    static genericGreet() {
        // Return a generic greeting message
        return "Hello from the Person class!";
    }
}

// Log the generic greeting message
console.log(Person.genericGreet()); // Output: Hello from the Person class!
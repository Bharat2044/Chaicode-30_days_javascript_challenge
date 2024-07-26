/**
 * Day 14 - Classes
 * 
 * Feature Request: Static Methods and Properties Script
 *  - Write a script that demonstrates static methods and properties in classes.
 */


// Define the class `Math`
class Math {
    // Define the static property `PI`
    static PI = 3.14159;

    // Define the static method `add` to add two numbers
    static add(a, b) {
        // Return the sum of the numbers
        return a + b;
    }

    // Define the static method `subtract` to subtract two numbers
    static subtract(a, b) {
        // Return the difference of the numbers
        return a - b;
    }
}

// Log the static property `PI`
console.log(Math.PI); // Output: 3.14159

// Call the static method `add` with two numbers
const sum = Math.add(5, 3);

// Log the result
console.log(sum); // Output: 8

// Call the static method `subtract` with two numbers
const difference = Math.subtract(10, 4);

// Log the result
console.log(difference); // Output: 6


// Try to access the static property `PI` through an instance
const math = new Math();
console.log(math.PI); // undefined

// Try to call the static method `add` through an instance
// const add = math.add(5, 3); // Error: math.add is not a function
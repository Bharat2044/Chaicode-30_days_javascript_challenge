/**
 * Day 2 - Operators
 * 
 * Feature Request: Comparison and Logical Operators Script
 *  - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
 */


let num1 = 8;
let num2 = 12;

console.log(`num1 > num2: ${num1 > num2}`);    // Output: num1 > num2: false
console.log(`num1 < num2: ${num1 < num2}`);    // Output: num1 < num2: true

console.log(`num1 >= num2: ${num1 >= num2}`);  // Output: num1 >= num2: false
console.log(`num1 <= num2: ${num1 <= num2}`);  // Output: num1 <= num2: true

console.log(`num1 == num2: ${num1 == num2}`);  // Output: num1 == num2: false
console.log(`num1 === num2: ${num1 === num2}`);// Output: num1 === num2: false

console.log(`num1 < 10 && num2 > 10: ${num1 < 10 && num2 > 10}`); // Output: num1 < 10 && num2 > 10: true
console.log(`num1 < 10 || num2 > 15: ${num1 < 10 || num2 > 15}`); // Output: num1 < 10 || num2 > 15: true
console.log(`!(num1 > num2): ${!(num1 > num2)}`); // Output: !(num1 > num2): true

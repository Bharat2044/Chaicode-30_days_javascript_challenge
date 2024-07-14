/**
 * Day 2 - Operators
 * 
 * Activity 4 - Logical Operators
 *  - Task 11: Write a program that uses the `&&` operator to combine two conditions and log the result to the console.
 */



let x = 5, y = 10;
console.log(`x < 10 && y > 5: ${x < 10 && y > 5}`); // Output: x < 10 && y > 5: true


let a = true;
let b = false;
let c = true;

console.log(`${a} && ${c}: ${a && c}`); // Output: true  && true: true
console.log(`${a} && ${b}: ${a && a}`); // Output: true && false: true
console.log(`${b} && ${a}: ${b && a}`); // Output: false && true: false
console.log(`${b} && ${b}: ${b && b}`); // Output: false && false: false


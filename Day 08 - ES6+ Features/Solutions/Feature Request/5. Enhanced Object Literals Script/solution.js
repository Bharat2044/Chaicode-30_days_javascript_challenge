/**
 * Day 8 - ES6+ Features
 * 
 * Feature Request: Enhanced Object Literals Script
 * - Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
*/


const dynamicMethod = () => "Hello, World!";
const prop = "score";

const enhancedObj = {
  dynamicMethod,
  [prop]: 95,
  greet() {
    return "Hi!";
  }
};

console.log(enhancedObj);
console.log(enhancedObj.greet());

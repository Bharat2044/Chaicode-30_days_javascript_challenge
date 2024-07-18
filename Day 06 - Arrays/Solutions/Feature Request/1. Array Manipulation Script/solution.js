/**
 * Day 6 - Arrays
 *
 * Feature Request: Array Manipulation Script
 *  - Demonstrate creating an array, adding/removing elements using `push`, `pop`, `shift`, and `unshift`.
 */


// Create an empty array
let arr = [];

// Add elements to the array using `push`
arr.push(1);
arr.push(2);
console.log(arr); // [1, 2]

// Remove elements from the end of the array using `pop`
arr.pop();
console.log(arr); // [1]

// Add elements to the beginning of the array using `unshift`
arr.unshift(9);
arr.unshift(8);
console.log(arr); // [8, 9, 1]

// Remove elements from the beginning of the array using `shift`
arr.shift();
arr.shift();

// Log the final array
console.log(arr); // [1]


/**
 * Day 6 - Arrays
 * 
 * Activity 3: Array Methods (Intermediate)
 *  - Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.
 */ 


// array creation
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using the `filter` method to get only even numbers
let evenArr = arr.filter((num) => num % 2 === 0);

// printing the new array
console.log(evenArr); // [2, 4, 6, 8, 10]
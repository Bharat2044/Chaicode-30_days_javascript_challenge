/**
 * Day 6 - Arrays
 * 
 * Activity 3: Array Methods (Intermediate)
 *  - Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
 */ 


// array creation
let arr = [1, 2, 3, 4, 5];

// using the `reduce` method to calculate the sum of all numbers
let sum = arr.reduce((acc, num) => acc + num, 0);

// printing the result
console.log(sum); // 15 
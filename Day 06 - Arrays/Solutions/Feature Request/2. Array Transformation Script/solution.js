/**
 * Day 6 - Arrays
 * 
 * Feature Request: Array Transformation Script
 *  - Use `map`, `filter`, and `reduce` methods to transform and aggregate array data.
 */


// create an array 
let arr = [1, 2, 3, 4, 5];

// use the `map` method to double each element in the array
let doubledArr = arr.map(ele => ele * 2);

// use the `filter` method to filter out even numbers from the array
let oddArr = arr.filter(ele => ele % 2 !== 0);

// use the `reduce` method to sum all elements in the array
let sum = arr.reduce((acc, ele) => acc + ele, 0);

// log the transformed and aggregated data
console.log("Original Array:", arr);

console.log("Doubled Array:", doubledArr);

console.log("Odd Numbers Array:", oddArr);

console.log("Sum of Array Elements:", sum);
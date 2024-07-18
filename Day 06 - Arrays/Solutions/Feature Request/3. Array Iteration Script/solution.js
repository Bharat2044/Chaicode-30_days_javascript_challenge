/**
 * Day 6 - Arrays
 * 
 * Feature Request: Array Iteration Script
 *  - Iterate over an array using both `for` loop and `forEach` method and log each element.
 */


// create an array
let arr = [1, 2, 3, 4, 5];

// iterate over the array using a `for` loop
console.log("Iterating over the array using a for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// iterate over the array using the `forEach` method
console.log("\nIterating over the array using the forEach method:");
arr.forEach(ele => console.log(ele));

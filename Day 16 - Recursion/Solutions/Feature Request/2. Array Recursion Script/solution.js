/**
 * Day 16 - Recursion
 * 
 * Feature Request: Array Recursion Script
 *  - Create a script that includes recursive functions to find the sum and maximum element of an array.
 */


// Function to find the sum of elements in an array
function sumArray(arr) {
    // Base case - if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case - add the first element to the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases for sumArray
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([5, 10, 15])); // 30
console.log(sumArray([2, 4, 6, 8, 10])); // 30



// Function to find the maximum element in an array
function maxArray(arr) {
    // Base case - if the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0];
    }

    // Recursive case - compare the first element with the maximum of the rest of the array
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

// Test cases for maxArray
console.log(maxArray([1, 2, 3, 4, 5])); // 5
console.log(maxArray([5, 10, 15])); // 15
console.log(maxArray([2, 4, 10, 8, 1])); // 10
console.log(maxArray([10, 50, 8, 3, 12])); // 50

/**
 * Day 18 - Algorithms
 * 
 * Feature Request: Searching Algorithm Script
 *  - Create a script that implements linear search and binary search algorithms to find values in arrays.
 */


// Function to implement the linear search algorithm
function linearSearch(arr, x) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If the element is found, return the index
        if (arr[i] === x) {
            return i;
        }
    }
    
    // If the element is not found, return -1
    return -1;
}

// Create an array of integers to search for a value
let arr1 = [2, 3, 4, 10, 40];

// Define the value to search for
let x = 10;

// Call the linearSearch function to find the index of the value
let index = linearSearch(arr1, x);

// Log the index of the value
if (index !== -1) {
    console.log("Linear Search: Element found at index", index);
} else {
    console.log("Linear Search: Element not found");
}


// Function to implement the binary search algorithm
function binarySearch(arr, x) {
    // Initialize the start and end indices
    let start = 0;
    let end = arr.length - 1;
    
    // Loop until the start index is less than or equal to the end index
    while (start <= end) {
        // Calculate the middle index
        let mid = Math.floor((start + end) / 2);
        
        // If the middle element is the target value, return the index
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            // If the middle element is less than the target value, search the right half
            start = mid + 1;
        } else {
            // If the middle element is greater than the target value, search the left half
            end = mid - 1;
        }
    }
    
    // If the element is not found, return -1
    return -1;
}

// Create a sorted array of integers to search for a value
let arr2 = [2, 3, 4, 10, 40];

// Define the value to search for
let target = 4;

// Call the binarySearch function to find the index of the value
let result = binarySearch(arr2, target);

// Log the index of the value
if (result !== -1) {
    console.log("Binary Search: Element found at index", result);
} else {
    console.log("Binary Search: Element not found");
}
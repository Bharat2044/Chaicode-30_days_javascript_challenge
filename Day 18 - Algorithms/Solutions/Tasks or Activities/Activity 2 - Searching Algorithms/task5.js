/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 2 - Searching Algorithms
 *  - Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
 */


// Function to implement binary search algorithm
function binarySearch(arr, target) {
    // Define the left and right pointers 
    let left = 0;
    let right = arr.length - 1;
    
    // Loop through the array while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index of the array
        let mid = Math.floor((left + right) / 2);
        
        // Check if the middle element is equal to the target value, return the index
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) { // If the middle element is less than the target value, update the left pointer
            left = mid + 1;
        } else { // If the middle element is greater than the target value, update the right pointer
            right = mid - 1;
        }
    }
    
    return -1;
}

// Create a sorted array of integers
let arr = [11, 12, 22, 25, 34, 64, 90];

// Define the target value to search for in the array
let target = 22;

// Call the binarySearch function to find the target value in the array
let index = binarySearch(arr, target);

// Log the index of the target value
if (index !== -1) {
    console.log(`The target value ${target} is found at index ${index}.`);
} else {
    console.log(`The target value ${target} is not found in the array.`);
}
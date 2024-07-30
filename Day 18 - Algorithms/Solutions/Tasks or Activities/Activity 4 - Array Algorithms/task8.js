/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 4 - Array Algorithms
 *  - Task 8: Write a function to rotate an array by k positions. Log the rotated array.
 */


// Function to rotate an array by k positions
function rotateArray(arr, k) {
    // Calculate the effective rotation amount
    let rotation = k % arr.length;
    
    // Reverse the entire array
    reverseArray(arr, 0, arr.length - 1);
    
    // Reverse the first rotation elements
    reverseArray(arr, 0, rotation - 1);
    
    // Reverse the remaining elements
    reverseArray(arr, rotation, arr.length - 1);
}

// Function to reverse an array within a given range
function reverseArray(arr, start, end) {

    // Loop through the array from start to end 
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

// Define an array to rotate
let arr = [1, 2, 3, 4, 5, 6, 7];

// Define the number of positions to rotate the array
let k = 3;

// Print the original array
console.log("Original array:", arr);

// Call the rotateArray function to rotate the array by k positions
rotateArray(arr, k);

// Print the rotated array
console.log("Rotated array:", arr);
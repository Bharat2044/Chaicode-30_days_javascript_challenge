/**
 * Day 18 - Algorithms
 * 
 * Feature Request: Array Algorithm Script
 *  - Create a script that rotates arrays and merges sorted arrays.
 */


// Function to rotate an array by a given number of positions
function rotateArray(arr, k) {
    // Calculate the number of rotations required
    let rotations = k % arr.length;
    
    // Rotate the array using array slicing
    let rotatedArray = arr.slice(-rotations).concat(arr.slice(0, arr.length - rotations));

    // Return the rotated array
    return rotatedArray;
}

// Define an array to rotate
let array1 = [1, 2, 3, 4, 5];

// Define the number of positions to rotate
let k = 2;

// Log the original array
console.log("Original Array:", array1);

// Call the rotateArray function to rotate the array
let rotatedArray = rotateArray(array1, k);

// Log the rotated array by k positions
console.log(`Rotated Array by ${k} positions:`, rotatedArray);


// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    // Initialize the merged array
    let mergedArray = [];
    
    // Initialize the indices for both arrays
    let i = 0;
    let j = 0;
    
    // Loop until one of the arrays is fully processed
    while (i < arr1.length && j < arr2.length) {
        // Compare elements from both arrays
        if (arr1[i] < arr2[j]) {
            // Add the smaller element to the merged array
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // Add any remaining elements from the first array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // Add any remaining elements from the second array
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    // Return the merged array
    return mergedArray;
}

// Define two sorted arrays to merge
let array2 = [1, 3, 5, 7];
let array3 = [2, 4, 6, 8];

// Log the original arrays
console.log("Array 1:", array2);
console.log("Array 2:", array3);

// Call the mergeSortedArrays function to merge the arrays
let mergedArray = mergeSortedArrays(array2, array3);

// Log the merged sorted array
console.log("Merged Sorted Array:", mergedArray);
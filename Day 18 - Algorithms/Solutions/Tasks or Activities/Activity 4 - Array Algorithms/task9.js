/**
 * Day 18 - Algorithms
 * 
 * Activity 4 - Array Algorithms
 *  - Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
 */


// Function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
    // Initialize an empty array to store the merged array
    let mergedArray = [];
    
    // Initialize two pointers for the two arrays
    let i = 0;
    let j = 0;
    
    // Loop through the arrays while both pointers are within bounds
    while (i < arr1.length && j < arr2.length) {
        // Compare the elements at the pointers
        if (arr1[i] < arr2[j]) {
            // Add the smaller element to the merged array
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // Add the remaining elements from the first array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // Add the remaining elements from the second array
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    // Return the merged array
    return mergedArray;
}

// Define two sorted arrays to merge
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

// Print the original arrays
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// Call the mergeSortedArrays function to merge the arrays
let mergedArray = mergeSortedArrays(arr1, arr2);

// Print the merged array
console.log("Merged array:", mergedArray);


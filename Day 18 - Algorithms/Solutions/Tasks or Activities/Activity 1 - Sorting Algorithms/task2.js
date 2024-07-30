/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 1 - Sorting Algorithms
 *  - Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
 */


// Function to implement the selection sort algorithm
function selectionSort(arr) {
    // Get the length of the array
    let arrayLength = arr.length;

    // Loop through the array
    for (let i = 0; i < arrayLength - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Loop through the remaining elements to find the actual minimum
        for (let j = i + 1; j < arrayLength; j++) {
            
            // If the current element is less than the current minimum, update minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If minIndex is not the same as the initial index, swap the elements
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

// Create an array of integers to be sorted
let arr = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr);

// Call the selectionSort function to sort the array
selectionSort(arr);

// Print the sorted array
console.log("Sorted array:", arr);

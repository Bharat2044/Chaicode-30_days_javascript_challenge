/**
 * Day 18 - Sorting Algorithms
 *
 * Activity 1 - Sorting Algorithms
 *  - Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
 */


// Function to implement the bubble sort algorithm
function bubbleSort(arr) {
  // Get the length of the array
  let arrayLength = arr.length;

  // Loop through the array
  for (let i = 0; i < arrayLength - 1; i++) {

    // Loop through the array again to compare adjacent elements
    for (let j = 0; j < arrayLength - i - 1; j++) {
        
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Create an array of integers to be sorted
let arr = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr);

// Call the bubbleSort function to sort the array
bubbleSort(arr);

// Print the sorted array
console.log("Sorted array:", arr);

/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 1 - Sorting Algorithms
 *  - Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
 */


// Function to implement the quicksort algorithm
function quickSort(arr, left, right) {
  // If the left index is less than the right index
  if (left < right) {
    // Partition the array
    let partitionIndex = partition(arr, left, right);

    // Recursively call quickSort on the left and right subarrays
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

// Function to partition the array
function partition(arr, left, right) {
  // Choose the rightmost element as the pivot
  let pivot = arr[right];
  let i = left - 1;

  // Loop through the array
  for (let j = left; j < right; j++) {
    // If the current element is less than the pivot
    if (arr[j] < pivot) {
      i++;

      // Swap the elements at i and j
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Swap the elements at i+1 and the pivot
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;

  // Return the partition index
  return i + 1;
}

// Create an array of integers to be sorted
let arr = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr);

// Call the quickSort function to sort the array
quickSort(arr, 0, arr.length - 1);

// Print the sorted array
console.log("Sorted array:", arr);
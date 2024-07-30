/**
 * Day 18 - Algorithms
 * 
 * Feature Request: Sorting Algorithm Script
 *  - Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
 */


// Function to implement the bubble sort algorithm
function bubbleSort(arr) {
    // Get the length of the array
    let n = arr.length;
    
    // Loop through the array
    for (let i = 0; i < n - 1; i++) {
        // Flag to check if any swaps are made in the inner loop
        let swapped = false;
        
        // Loop through the array from 0 to n-i-1
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                // Set the swapped flag to true
                swapped = true;
            }
        }
        
        // If no swaps are made, the array is already sorted
        if (!swapped) {
            break;
        }
    }
}

// Create an array of integers to be sorted
let arr1 = [64, 34, 25, 12, 22, 11, 90];

// Print the original array
console.log("Original array:", arr1);

// Call the bubbleSort function to sort the array
bubbleSort(arr1);

// Print the sorted array
console.log("Sorted array (Bubble Sort):", arr1);


// Function to implement the selection sort algorithm
function selectionSort(arr) {
    // Get the length of the array
    let n = arr.length;
    
    // Loop through the array
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted array
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

// Create an array of integers to be sorted
let arr2 = [4, 3, 5, 1, 2, 11, 9];

// Print the original array
console.log("Original array:", arr2);

// Call the selectionSort function to sort the array
selectionSort(arr2);

// Print the sorted array
console.log("Sorted array (Selection Sort):", arr2);


// Function to implement the quicksort algorithm
function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array
        let pivot = partition(arr, low, high);
        
        // Recursively sort the elements before and after the partition
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

// Function to partition the array for quicksort
function partition(arr, low, high) {
    // Choose the rightmost element as the pivot
    let pivot = arr[high];
    
    // Index of the smaller element
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        // If the current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++;
            
            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Swap arr[i+1] and arr[high] (or the pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}

// Create an array of integers to be sorted
let arr3 = [104, 3, 25, 12, 122, 1, 90];

// Print the original array
console.log("Original array:", arr3);

// Call the quickSort function to sort the array
quickSort(arr3, 0, arr3.length - 1);

// Print the sorted array
console.log("Sorted array (Quick Sort):", arr3);
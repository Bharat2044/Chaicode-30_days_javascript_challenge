/**
 * Day 16 - Feature Request
 * 
 * Feature Request: Recursive Search Script
 *  - Create a script that includes recursive functions for binary search and counting occurrences in an array.
 */


// Function to perform a binary search on a sorted array
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case - if the left index is greater than the right index, the target is not found
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // If the middle element is greater than the target, search the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the middle element is less than the target, search the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Test cases for binarySearch
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1


// Function to count the occurrences of an element in an array
function countOccurrences(arr, target) {
    // Base case - if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case - check if the first element is the target and count the occurrences in the rest of the array
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// Test cases for countOccurrences
console.log(countOccurrences([1, 2, 3, 4, 3], 3)); // 2
console.log(countOccurrences([1, 2, 3, 4, 5], 5)); // 1
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 2, 2, 4, 2], 2)); // 3
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5

/**
 * Day 16 - Recursion
 * 
 * Activity 4 - Recursive Search
 *  - Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
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

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4

console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
/**
 * Day 16 - Recursion
 * 
 * Activity 4 - Recursive Search
 *  - Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
 */


// Function to count the occurrences of a target element in an array
function countOccurrences(arr, target) {
    // Base case - if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case - check if the first element is the target and add 1 to the count
    // Continue counting the occurrences in the rest of the array
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5, 3], 3)); // 2

console.log(countOccurrences([1, 2, 3, 4, 5], 5)); // 1

console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0

console.log(countOccurrences([1, 2, 2, 3, 4, 2, 5], 2)); // 3
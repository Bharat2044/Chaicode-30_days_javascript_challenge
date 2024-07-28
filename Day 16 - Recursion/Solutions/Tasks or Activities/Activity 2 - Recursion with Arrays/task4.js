/**
 * Day 16 - Recursion
 * 
 * Activity 2 - Recursion with Arrays
 *  - Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
 */


// Function to find the maximum element in an array
function maxArray(arr) {
    // Base case - if the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0]
    }

    // Recursive case - compare the first element with the maximum of the rest of the elements in the array
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

// Test cases
console.log(maxArray([1, 2, 3, 4, 5])); // 5

console.log(maxArray([5, 10, 45, 20])); // 45

console.log(maxArray([2, 4, 9, 8, 1])); // 9
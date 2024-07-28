/**
 * Day 16 - Recursion
 * 
 * Activity 2 - Recursion with Arrays
 *  - Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
 */


// Function to find the sum of all elements in an array
function sumArray(arr) {
    // Base case - if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case - add the first element to the sum of the rest of the elements in the array
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([5, 10, 15, 20])); // 50
console.log(sumArray([2, 4, 6, 8, 10])); // 30
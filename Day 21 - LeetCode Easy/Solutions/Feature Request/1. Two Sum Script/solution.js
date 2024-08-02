/**
 * Day 21 - LeetCode Easy
 * 
 * Feature Request: Two Sum Script
 *  - Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
 */


// Function to find the indices of two numbers that add up to the target
const twoSum = (nums, target) => {
    // Create an empty object to store the numbers and their indices
    const map = {};

    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map[complement] !== undefined) {
            // Return the indices of the two numbers
            return [map[complement], i];
        }

        // Store the current number and its index in the map
        map[nums[i]] = i;
    }

    // Return [-1, -1] if no solution is found
    return [-1, -1];
};


// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: [-1, -1]
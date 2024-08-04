/**
 * Day 23 - LeetCode Hard
 * 
 * Activity 3 - Trapping Rain Water
 *  - Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
 *      - Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
 *      - Log the amount of trapped water for a few test cases.
 */


// Function to calculate the amount of trapped rainwater
function trap(height) {
    // Initialize left and right pointers
    let left = 0, right = height.length - 1;

    // Initialize left and right max heights
    let leftMax = 0, rightMax = 0;

    // Initialize the result
    let result = 0;

    // Loop through the height array
    while (left < right) {
        // Check if the left height is less than the right height and update the result accordingly
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else { 
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }

    // Return the result
    return result;
}

// Test cases
let height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height1)); // Output: 6

let height2 = [4,2,0,3,2,5];
console.log(trap(height2)); // Output: 9

let height3 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height3)); // Output: 6
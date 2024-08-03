/**
 * Day 22 - LeetCode Medium
 * 
 * Activity 3 - Container With Most Water
 *  - Task 3: Solve the “Container With Most Water” problem on LeetCode.
 *      - Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
 *      - Log the maximum amount of water for a few test cases.
 */



// Function to find the container with the most water
function maxArea(height) {
    // Initialize the left and right pointers, the max area, and the current area
    let left = 0, right = height.length - 1, maxArea = 0, currArea;
    
    // Loop until the left pointer is less than the right pointer
    while (left < right) {
        // Calculate the current area
        currArea = Math.min(height[left], height[right]) * (right - left);
        
        // Update the max area to the maximum of the current area and the max area
        maxArea = Math.max(maxArea, currArea);
        
        // Move the pointer with the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    // Return the max area
    return maxArea;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

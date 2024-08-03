/**
 * Day 22 - LeetCode Medium
 * 
 * Activity 4 - 3Sum
 *  - Task 4: Solve the "3Sum” problem on LeetCode.
 *      - Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
 *      - Log the triplets for a few test cases, including edge cases.
 */


// Function to find all unique triplets in an array that sum to zero
function threeSum(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // Initialize the result array
    let result = [];
    
    // Loop through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Check for duplicates
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            // Initialize the left and right pointers
            let left = i + 1, right = nums.length - 1, sum = 0 - nums[i];
            
            // Loop until the left pointer is less than the right pointer
            while (left < right) {
                // Check if the sum is zero
                if (nums[left] + nums[right] === sum) {
                    // Add the triplet to the result array
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    // Check for duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    // Move the pointers
                    left++;
                    right--;
                } else if (nums[left] + nums[right] < sum) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    // Return the result array
    return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-2, 0, 0, 2, 2])); // [[-2, 0, 2]]
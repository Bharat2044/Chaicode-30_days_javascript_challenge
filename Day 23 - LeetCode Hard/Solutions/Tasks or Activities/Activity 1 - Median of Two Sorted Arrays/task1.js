/**
 * Day 23 - LeetCode Hard
 * 
 * Activity 1 - Median of Two Sorted Arrays
 *  - Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
 *      - Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
 *      - Log the median for a few test cases, including edge cases.
 */


/**
 * Median means the middle value in a list of numbers. 
 *  - If the list has an odd number of elements, the median is the middle element. 
 *  - If the list has an even number of elements, the median is the average of the two middle elements. 
 */


// Function to find the median of two sorted arrays
function findMedianSortedArrays(nums1, nums2) {
    // Merge the two sorted arrays
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    
    // Find the median
    let median;

    // Check if the merged array has an even or odd number of elements
    if (merged.length % 2 === 0) { 
        let mid = merged.length / 2;
        median = (merged[mid - 1] + merged[mid]) / 2;
    } else {
        median = merged[Math.floor(merged.length / 2)];
    }
    
    // Return the median
    return median;
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([2], [])); // 2
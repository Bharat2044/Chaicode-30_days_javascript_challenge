/**
 * Day 22 - LeetCode Medium
 * 
 * Activity 2: Longest Substring Without Repeating Characters
 *  - Task 2: Solve the “Longest Substring Without Repeating Characters” problem on LeetCode.
 *      - Write a function that takes a string and returns the length of the longest substring without repeating characters.
 *      - Log the length for a few test cases, including edge cases.
 */


// Function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    // Initialize the start index of the substring, the max length, and a map to store the characters
    let start = 0, maxLength = 0, map = new Map();
    
    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Check if the character is in the map
        if (map.has(s[i])) {
            // Update the start index to the maximum of the current start index and the index of the character + 1
            start = Math.max(start, map.get(s[i]) + 1);
        }
        
        // Update the map with the character and its index
        map.set(s[i], i);
        
        // Update the max length to the maximum of the current max length and the difference between the current index and the start index + 1
        maxLength = Math.max(maxLength, i - start + 1);
    }
    
    // Return the max length
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1
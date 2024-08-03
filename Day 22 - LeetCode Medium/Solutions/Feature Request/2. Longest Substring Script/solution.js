/**
 * Day 22 - LeetCode Medium
 * 
 * Feature Request: Longest Substring Script
 *  - Create a script that includes a function to find the longest substring without repeating characters and logs the length.
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
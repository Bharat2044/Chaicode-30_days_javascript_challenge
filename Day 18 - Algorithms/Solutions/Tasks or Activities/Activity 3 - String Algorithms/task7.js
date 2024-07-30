/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 3 - String Algorithms
 *  - Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
 */


// Function to find the longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(str) {
    // Initialize variables to store the start and end indices of the substring
    let start = 0;
    let end = 0;
    
    // Initialize a set to store the characters in the current substring
    let charSet = new Set();
    
    // Initialize a variable to store the length of the longest substring
    let maxLength = 0;
    
    // Loop through the string
    while (end < str.length) {
        // If the character at the end index is not in the set
        if (!charSet.has(str[end])) {
            // Add the character to the set
            charSet.add(str[end]);
            // Increment the end index
            end++;
            // Update the maxLength if the current substring is longer
            maxLength = Math.max(maxLength, end - start);
        } else {
            // If the character is already in the set, remove the character at the start index
            charSet.delete(str[start]);
            // Increment the start index
            start++;
        }
    }
    
    // Return the length of the longest substring
    return maxLength;
}

// Define a string to find the longest substring without repeating characters
let str = "abcabcbb";

// Call the longestSubstringWithoutRepeatingCharacters function to find the length of the longest substring
let length = longestSubstringWithoutRepeatingCharacters(str);

// Log the length of the longest substring
console.log("Length of the longest substring without repeating characters:", length);


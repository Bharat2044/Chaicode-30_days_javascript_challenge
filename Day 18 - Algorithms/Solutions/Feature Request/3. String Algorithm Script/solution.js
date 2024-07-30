/**
 * Day 18 - Algorithms
 * 
 * Feature Request: String Algorithm Script
 *  - Write a script that counts character occurrences and finds the longest substring without repeating characters.
 */


// Function to count the occurrences of each character in a string
function countCharacterOccurrences(str) {
    // Create an object to store the character occurrences
    let charCount = {};
    
    // Loop through the string
    for (let char of str) {
        // Check if the character is already in the object
        if (charCount[char]) {
            // Increment the count if the character exists
            charCount[char]++;
        } else {
            // Initialize the count if the character is new
            charCount[char] = 1;
        }
    }
    
    // Return the character occurrences
    return charCount;
}

// Define a string to count character occurrences
let str1 = "hello world";

// Call the countCharacterOccurrences function
let charOccurrences = countCharacterOccurrences(str1);

// Log the character occurrences
console.log("Character Occurrences:", charOccurrences);


// Function to find the longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(str) {
    // Create a map to store the index of each character
    let charIndex = {};
    
    // Initialize the start and max length of the substring
    let start = 0;
    let maxLength = 0;
    
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is already in the map
        if (charIndex[str[i]] !== undefined) {
            // Update the start index if the character is repeated
            start = Math.max(start, charIndex[str[i]] + 1);
        }
        
        // Update the index of the character
        charIndex[str[i]] = i;
        
        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, i - start + 1);
    }
    
    // Return the length of the longest substring
    return maxLength;
}

// Define a string to find the longest substring without repeating characters
let str2 = "abcabcbb";

// Call the longestSubstringWithoutRepeatingCharacters function
let length = longestSubstringWithoutRepeatingCharacters(str2);

// Log the length of the longest substring
console.log("Length of Longest Substring Without Repeating Characters:", length);


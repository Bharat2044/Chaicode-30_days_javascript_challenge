/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 3 - String Algorithms
 *  - Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
 */


// Function to count the occurrences of each character in a string
function countCharacterOccurrences(str) {
    // Create an object to store the character counts
    let charCounts = {};
    
    // Loop through the characters in the string
    for (let char of str) {
        // If the character is not in the charCounts object, initialize it with a count of 1
        if (!charCounts[char]) {
            charCounts[char] = 1;
        } else { // If the character is already in the charCounts object, increment the count
            charCounts[char]++;
        }
    }
    
    // Return the character counts object
    return charCounts;
}

// Define a string to count the character occurrences
let str = "hello world";

// Call the countCharacterOccurrences function to count the character occurrences
let charCounts = countCharacterOccurrences(str);

// Log the character counts
console.log("Character counts:", charCounts);


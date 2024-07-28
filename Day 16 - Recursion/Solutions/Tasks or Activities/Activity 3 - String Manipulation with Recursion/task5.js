/**
 * Day 16 - Recursion
 * 
 * Activity 3 - String Manipulation with Recursion
 *  - Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
 */


// Function to reverse a string using recursion
function reverseString(str) {
    // Base case - if the string is empty, return an empty string
    if (str === "") {
        return "";
    }

    // Recursive case - reverse the rest of the string and append the first character
    return reverseString(str.slice(1)) + str[0];
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("racecar")); // "racecar"
console.log(reverseString("12345")); // "54321"
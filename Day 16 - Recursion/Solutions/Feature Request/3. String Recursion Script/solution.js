/**
 * Day 16 - Recursion
 * 
 * Feature Request: String Recursion Script
 *  - Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
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

// Test cases for reverseString
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("racecar")); // "racecar"


// Function to check if a string is a palindrome using recursion
function isPalindrome(str) {
    // Base case - if the string is empty or has only one character, it is a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case - check if the substring without the first and last characters is a palindrome
    return isPalindrome(str.slice(1, -1));
}

// Test cases for isPalindrome
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("12331")); // false
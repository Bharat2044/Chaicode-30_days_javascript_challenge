/**
 * Day 16 - Recursion
 * 
 * Activity 3 - String Manipulation with Recursion
 *  - Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
 */


/**
 * Palindrome: A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * 
 * Examples: "racecar", "madam", "level", "12321" are palindromes.
 */


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

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("12331")); // false
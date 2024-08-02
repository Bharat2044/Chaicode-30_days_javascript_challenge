/**
 * Day 21 - LeetCode Easy
 *  
 * Feature Request: Palindrome Number Script
 *  - Write a script that includes a function to check if an integer is a palindrome and logs the result.
 */


// Function to check if a number is a palindrome
const isPalindrome = (num) => {
    // Check if the number is negative
    if (num < 0) {
        return false;
    }

    // Initialize the reversed number
    let rev = 0;
    let originalNum = num;

    // Loop until the number becomes 0
    while (num != 0) {
        // Get the last digit of the number
        let lastDigit = num % 10;

        // Update the reversed number 
        rev = rev * 10 + lastDigit;

        // Remove the last digit from the number
        num = parseInt(num / 10);
    }

    // Check if the reversed number is equal to the original number
    return rev === originalNum;
};

// Test cases
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
console.log(isPalindrome(10));    // Output: false
console.log(isPalindrome(11111));   // Output: true
console.log(isPalindrome(-101));  // Output: false
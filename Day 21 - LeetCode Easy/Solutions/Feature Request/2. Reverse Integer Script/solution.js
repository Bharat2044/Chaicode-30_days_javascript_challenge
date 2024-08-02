/**
 * Day 21 - LeetCode Easy
 * 
 * Feature Request: Reverse Integer Script
 *  - Create a script that includes a function to reverse an integer and handles edge cases.
 */


// Function to reverse an integer
const reverseInteger = (num) => {
    // Initialize the reversed number
    let rev = 0;

    // Loop until the number becomes 0
    while (num != 0) {
        // Get the last digit of the number
        let lastDigit = num % 10;

        // Check for overflow
        if (rev > Math.pow(2, 31) / 10 || (rev == Math.pow(2, 31) / 10 && lastDigit > 7)) {
            return 0;
        }

        // Check for underflow
        if (rev < Math.pow(-2, 31) / 10 || (rev == Math.pow(-2, 31) / 10 && lastDigit < -8)) {
            return 0;
        }

        // Update the reversed number 
        rev = rev * 10 + lastDigit;

        // Remove the last digit from the number
        num = parseInt(num / 10);
    }

    // Return the reversed number
    return rev;
};


// Test cases
console.log(reverseInteger(123));   // Output: 321
console.log(reverseInteger(-123));  // Output: -321
console.log(reverseInteger(120));   // Output: 21
console.log(reverseInteger(0));     // Output: 0
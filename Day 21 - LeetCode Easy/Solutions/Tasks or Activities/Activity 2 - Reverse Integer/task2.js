/**
 * Day 21 - LeetCode Easy
 * 
 * Activity 2 - Reverse Integer
 *  - Task 2: Solve the "Reverse Integer" problem on LeetCode.
 *      - Write a function that takes an integer and returns it with its digits reversed.
 *      - Handle edge cases like negative numbers and numbers ending in zero.
 *      - Log the reversed integers for a few test cases.
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
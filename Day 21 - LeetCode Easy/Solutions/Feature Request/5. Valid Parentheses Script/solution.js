/**
 * Day 21 - LeetCode Easy
 * 
 * Feature Request: Valid Parentheses Script
 *  - Write a script that includes a function to check if a string of parentheses is valid and logs the result.
 */


// Function to check if a string of parentheses is valid
const isValid = (s) => {
    // Create a stack to store the opening parentheses
    const stack = [];
    
    // Create a map to store the matching parentheses
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    // Loop through each character in the string
    for (let char of s) {
        // Check if the character is an opening parenthesis
        if (map[char]) {
            // Push the opening parenthesis to the stack
            stack.push(char);
        } else {
            // Get the last opening parenthesis from the stack
            let last = stack.pop();
            
            // Check if the closing parenthesis matches the last opening parenthesis
            if (char !== map[last]) {
                return false;
            }
        }
    }
    
    // Check if the stack is empty
    return stack.length === 0;
};

// Test cases
console.log(isValid("()"));  // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));  // Output: false
console.log(isValid("([)]"));  // Output: false
console.log(isValid("{[]}"));  // Output: true
console.log(isValid(""));  // Output: true
console.log(isValid("["));  // Output: false
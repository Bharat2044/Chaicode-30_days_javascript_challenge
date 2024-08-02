/**
 * Day 21 - LeetCode Easy
 * 
 * Activity 5: Merge Two Sorted Lists
 *  - Task 5: Solve the "Valid Parentheses" problem on LeetCode.
 *      - Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
 *      - A string is valid if open brackets are closed in the correct order.
 *      - Log the result for a few test cases.
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
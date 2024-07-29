/**
 * Day 17 - Data Structures
 * 
 * Feature Request: Stack Script
 *  - Create a script that implements a stack and uses it to reverse a string.
 */


// Implement the Stack class
class Stack {
  // Constructor to initialize the stack
  constructor() {
    this.items = []; // Array to store the elements of the stack
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to pop the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Method to get the size of the stack
  size() {
    return this.items.length;
  }
}

// Function to reverse a string using a stack
function reverseString(input) {
  // Create a new stack
  const stack = new Stack();

  // Push each character of the input string onto the stack
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
  }

  // Initialize an empty string to store the reversed string
  let reversedString = "";

  // Pop each character from the stack to reverse the string
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Test the reverseString function
const inputString = "hello";
const reversedString = reverseString(inputString);

console.log(`Input string: ${inputString}`); // Output: hello
console.log(`Reversed string: ${reversedString}`); // Output: olleh
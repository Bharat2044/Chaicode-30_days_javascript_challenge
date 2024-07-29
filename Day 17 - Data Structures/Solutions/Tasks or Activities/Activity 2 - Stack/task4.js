/**
 * Day 17 - Data Structures
 * 
 * Activity 2 - Stack
 *  Task 4: Use the `Stack` class to reverse a string by pushing all characters onto the stack and then popping them off.
 */


// Implement the Stack class
class Stack {
    // Constructor to initialize the stack
    constructor() {
      this.stack = []; // Array to store elements of the stack
    }
  
    // Method to add an element to the top of the stack
    push(element) {
      // Add the element to the top of the stack
      this.stack.push(element);
    }
  
    // Method to remove and return the element from the top of the stack
    pop() {
      // Check if the stack is empty (no elements), then return null
      if (this.stack.length === 0) {
        return "Stack is empty, you can't remove any element";
      }
  
      // Remove and return the element from the top of the stack
      return this.stack.pop();
    }
  
    // Method to view the element at the top of the stack without removing it
    peek() {
      // Check if the stack is empty (no elements), then return null
      if (this.stack.length === 0) {
        return "Stack is empty, you can't view any element";
      }
  
      // Return the element at the top of the stack
      return this.stack[this.stack.length - 1];
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
  
    // Pop each character from the stack and append it to the reversed string
    while (stack.stack.length > 0) {
        reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Test the reverseString function
  const inputString = "hello";
  console.log(reverseString(inputString)); // Output: "olleh"

  const inputString2 = "world";
  console.log(reverseString(inputString2)); // Output: "dlrow"
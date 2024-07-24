/**
 * Day 12 - Error Handling
 * 
 * Feature Request: Custom Error Script
 *  - Create a script that defines and throws custom errors, handling them with try-catch blocks.
 */


// Custom Error class that extends the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function to demonstrate custom error handling using try-catch blocks
function customErrorHandling() {
  try {
    // Code that may throw a custom error
    console.log("Try block: Start");
    throw new CustomError("Custom error occurred!");
    console.log("Try block: End");
  } catch (error) {
    // Catch block to handle the custom error
    console.log("Catch block:", error.name, error.message);
  } finally {
    // Finally block to execute code after try-catch
    console.log("Finally block: End");
  }
}

// Call the function to demonstrate custom error handling
customErrorHandling();
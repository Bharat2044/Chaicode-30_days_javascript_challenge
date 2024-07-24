/**
 * Day 12 - Error Handling
 * 
 * Feature Request: Basic Error Handling Script
 *  - Write a script that demonstrates basic error handling using try-catch and finally blocks.
 */


// Function to demonstrate basic error handling using try-catch and finally blocks
function basicErrorHandling() {
  try {
    // Code that may throw an error
    console.log("Try block: Start");
    throw new Error("An error occurred!");
    console.log("Try block: End");
  } catch (error) {
    // Catch block to handle the error
    console.log("Catch block:", error.message);
  } finally {
    // Finally block to execute code after try-catch
    console.log("Finally block: End");
  }
}

// Call the function to demonstrate basic error handling
basicErrorHandling();
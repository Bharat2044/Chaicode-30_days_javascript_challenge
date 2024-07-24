/**
 * Day 12 - Error Handling
 *
 * Activity 3 - Custom Error Objects
 *  - Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
 */


// Custom error class that extends the built-in Error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Function that validates user input and throws a custom error if the validation fails
function validateInput(input) {
  if (input === "") {
    throw new ValidationError("Input cannot be empty.");
  }
}

// Try-catch block to handle the custom error
try {
  validateInput("");
} catch (error) {
  console.log("Caught custom error:", error.message);
}

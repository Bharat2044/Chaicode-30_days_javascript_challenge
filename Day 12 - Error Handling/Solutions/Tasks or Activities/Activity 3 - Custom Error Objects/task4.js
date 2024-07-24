/**
 * Day 12 - Error Handling
 *
 * Activity 3 - Custom Error Objects
 *  - Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
 */


// Custom error class that extends the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function that throws an instance of the custom error
function throwCustomError() {
  try {
    throw new CustomError("This is a custom error.");
  } catch (error) {
    console.log("Caught custom error:", error.message);
  }
}

// Call the function to throw and handle the custom error
throwCustomError();
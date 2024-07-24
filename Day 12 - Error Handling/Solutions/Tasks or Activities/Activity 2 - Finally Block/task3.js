/**
 * Day 12 - Error Handling
 *
 * Activity 2 - Finally Block
 *  - Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
 */


// Function that includes a try-catch block and a finally block
function tryCatchFinally() {
  try {
    console.log("Try block");
  } catch (error) {
    console.log("Catch block", error);
  } finally {
    console.log("Finally block");
  }
}

// Call the function
tryCatchFinally();
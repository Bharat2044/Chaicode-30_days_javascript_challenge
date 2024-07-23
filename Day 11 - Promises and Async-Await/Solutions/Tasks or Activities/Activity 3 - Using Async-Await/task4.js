/**
 * Day 11 - Promises and Async/Await
 * 
 * Activity 3 - Using Async/Await
 *  - Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
 */



async function logResolvedValue() {
    // Create a promise that resolves with a message after a 2-second timeout
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 2000);
    });

    // Wait for the promise to resolve and log the resolved value
    const resolvedValue = await promise;
    console.log(resolvedValue);
}

// Call the async function
logResolvedValue();
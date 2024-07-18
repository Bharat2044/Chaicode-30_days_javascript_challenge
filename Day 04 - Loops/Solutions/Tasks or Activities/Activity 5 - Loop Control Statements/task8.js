/**
 * Day 4 - Loops
 * 
 * Activity 5: Loop Control Statements
 *  - Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.
 */


for (let i = 1; i <= 10; i++) {
    
    if (i === 5) {
        continue;
    }

    console.log(i);
}
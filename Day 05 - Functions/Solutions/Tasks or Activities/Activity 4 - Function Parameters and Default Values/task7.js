/**
 * Day 5 - Functions
 * 
 * Activity 4: Function Parameters and Default Values
 *  - Task 7: Product of two numbers with a default value.
 */


// Function with default value
function product(num1, num2 = 2) {
  return num1 * num2;
}

console.log(product(5, 10)); // 50
console.log(product(20)); // 40
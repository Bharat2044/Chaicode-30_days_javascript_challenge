/**
 * Day 8 - ES6+ Features
 * 
 * Feature Request: Spread and Rest Operators Script
 *  - Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
 */


// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);


// Rest Operator
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

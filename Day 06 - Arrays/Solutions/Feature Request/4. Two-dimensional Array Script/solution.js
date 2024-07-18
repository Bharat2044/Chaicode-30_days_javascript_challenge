/**
 * Day 6 - Arrays
 * 
 * Feature Request: Two-dimensional Array Script
 *  - Demonstrate the creation and manipulation of a two-dimensional array.
 */


// Create a two-dimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Log the two-dimensional array
console.log("Original Matrix:");
console.log(matrix);

// Access an element in the two-dimensional array
console.log("\nElement at [0][0]:", matrix[0][0]);
console.log("Element at [1][2]:", matrix[1][2]);
console.log("Element at [2][2]:", matrix[2][2]);

// Update an element in the two-dimensional array
matrix[1][1] = 0;
matrix[2][0] = 10;

// Log the updated two-dimensional array
console.log("\nUpdated Matrix:");
console.log(matrix);

// Iterate over the two-dimensional array using nested loops
console.log("\nIterating over the Matrix:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
  }
}


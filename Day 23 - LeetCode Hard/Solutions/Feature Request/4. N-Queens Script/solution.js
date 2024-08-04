/**
 * Day 23 - LeetCode Hard
 * 
 * Feature Request: N-Queens Script
 *  - Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
 */


// Function to solve the N-Queens problem
function solveNQueens(n) {
    // Initialize the chessboard
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    let result = [];
    
    // Helper function to check if the current position is safe
    function isSafe(row, col) {
        // Check the current row and column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Check the left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Check the right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        // If the position is safe, return true
        return true;
    }
    
    // Helper function to backtrack and place the queens
    function backtrack(row) {
        // Check if the row is equal to n and add the board to the result
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        // Loop through each column in the current row
        for (let col = 0; col < n; col++) {
            // Check if the current position is safe and place the queen accordingly
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    // Start the backtracking process
    backtrack(0);
    
    // Return the result
    return result;
}

// Test cases
let n1 = 4;
console.log(solveNQueens(n1)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

let n2 = 1;
console.log(solveNQueens(n2)); // Output: [["Q"]]

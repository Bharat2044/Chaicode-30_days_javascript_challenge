/**
 * Day 16 - Recursion
 * 
 * Activity 5 - Tree Traversal (Optional)
 *  - Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
 */


/**
 * A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.
 * 
 * The depth of a binary tree is the number of edges on the longest path from the root node to a leaf node.
 */



// Node class to represent a binary tree node
class Node {
    // Constructor to create a new node with a given value
    constructor(value) {
        // The value of the node
        this.value = value;
        // The left child of the node
        this.left = null;
        // The right child of the node
        this.right = null;
    }
}

// Function to calculate the depth of a binary tree
function calculateDepth(node) {
    // Base case - if the node is null, return 0
    if (node === null) {
        return 0;
    }

    // Recursive case - calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // Return the maximum depth of the left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Create a binary tree
const root = new Node(1);
// Add child nodes
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

// Calculate the depth of the binary tree
console.log("Depth of the binary tree:");
console.log(calculateDepth(root)); // 3

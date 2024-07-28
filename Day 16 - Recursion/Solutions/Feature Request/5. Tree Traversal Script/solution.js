/**
 * Day 16 - Recursion
 * 
 * Feature Request: Tree Traversal Script
 *  - Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
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


// Function to perform an in-order traversal of a binary tree
function inOrderTraversal(node) {
    // Base case - if the node is null, return (do nothing)
    if (node !== null) {
        // Recursive case - visit the left subtree, then the current node, then the right subtree
        inOrderTraversal(node.left);

        // Log the value of the current node
        console.log(node.value);

        // Continue the traversal on the right subtree of the current node
        inOrderTraversal(node.right);
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


// Perform in-order traversal
console.log("In-order traversal:");
inOrderTraversal(root);

// Calculate the depth of the binary tree
console.log("Depth of the binary tree:");
console.log(calculateDepth(root)); // 3
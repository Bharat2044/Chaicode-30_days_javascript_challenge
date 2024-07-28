/**
 * Day 16 - Recursion
 * 
 * Activity 5 - Tree Traversal (Optional)
 *  - Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
 */


/**
 * In-order traversal is a depth-first traversal technique that visits the nodes in the following order:
 * 1. Visit the left subtree
 * 2. Visit the current node
 * 3. Visit the right subtree
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

// Create a binary tree
const root = new Node(1);
// Add child nodes
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Perform in-order traversal
console.log("In-order traversal:");
inOrderTraversal(root);


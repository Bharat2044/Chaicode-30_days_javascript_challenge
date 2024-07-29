/**
 * Day 17 - Data Structures
 * 
 * Feature Request: Binary Tree Script
 *  - Create a script that implements a binary tree with insertion and in-order traversal methods.
 */


// Implement the TreeNode class
class TreeNode {
    // Constructor to initialize the node with a value
    constructor(value) {
      this.value = value; // Value of the node
      this.left = null; // Reference to the left child node
      this.right = null; // Reference to the right child node
    }
  }
  
  // Implement the BinaryTree class
  class BinaryTree {
    // Constructor to initialize the binary tree
    constructor() {
      this.root = null; // Root node of the binary tree
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      // Create a new node with the given value
      const newNode = new TreeNode(value);
  
      // If the tree is empty, set the new node as the root
      if (this.root === null) {
        this.root = newNode;
      } else {
        // Traverse the tree to find the correct position to insert the new node
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a node into the binary tree
    insertNode(node, newNode) {
      // If the new node's value is less than the current node's value
      if (newNode.value < node.value) {
        // If the current node does not have a left child, set the new node as the left child
        if (node.left === null) {
          node.left = newNode;
        } else {
          // Recursively insert the new node into the left subtree
          this.insertNode(node.left, newNode);
        }
      } else {
        // If the new node's value is greater than or equal to the current node's value
        // If the current node does not have a right child, set the new node as the right child
        if (node.right === null) {
          node.right = newNode;
        } else {
          // Recursively insert the new node into the right subtree
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal of the binary tree
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        // Traverse the left subtree
        this.inOrderTraversal(node.left);
  
        // Display the value of the current node
        console.log(node.value);
  
        // Traverse the right subtree
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Test the BinaryTree class implementation
  const binaryTree = new BinaryTree(); // Create a new binary tree
  
  // Insert values into the binary tree
  binaryTree.insert(10); // Insert value 10
  binaryTree.insert(5); // Insert value 5
  binaryTree.insert(15); // Insert value 15
  binaryTree.insert(3); // Insert value 3
  binaryTree.insert(7); // Insert value 7
  binaryTree.insert(12); // Insert value 12
  binaryTree.insert(18); // Insert value 18
  
  // Perform in-order traversal of the binary tree
  binaryTree.inOrderTraversal(); // Output: 3, 5, 7, 10, 12, 15, 18
  
  
/**
 * Day 17 - Data Structures
 * 
 * Activity 4 - Binary Tree
 *  Task 7: Implement a `TreeNode` class to represent a node in a binary tree with properties `value`, `left`, and `right`.
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
  
  // Test the TreeNode class implementation
  const nodeA = new TreeNode(10); // Create a new node with value 10
  const nodeB = new TreeNode(20); // Create a new node with value 20
  const nodeC = new TreeNode(30); // Create a new node with value 30
  
  // Link the nodes together
  nodeA.left = nodeB; // Node A's left child is node B
  nodeA.right = nodeC; // Node A's right child is node C
  
  // Output the nodes and their relationships
  console.log(nodeA); // Output: TreeNode { value: 10, left: TreeNode { value: 20, left: null, right: null }, right: TreeNode { value: 30, left: null, right: null } }
  console.log(nodeB); // Output: TreeNode { value: 20, left: null, right: null }
  console.log(nodeC); // Output: TreeNode { value: 30, left: null
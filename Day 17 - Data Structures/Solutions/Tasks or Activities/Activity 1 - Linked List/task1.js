/**
 * Day 17 - Data Structures
 * 
 * Activity 1 - Linked List
 *  Task 1: Implement a `Node` class to represent an element in a linked list with properties `value` and `next`.
 */


// Implement the Node class
class Node {
    // Constructor to initialize the Node with a value and next pointer
    constructor(value) {
        this.value = value; // Value of the node
        this.next = null; // Pointer to the next node
    }
}

// Test the Node class implementation
const node1 = new Node(1); // Create a new node with value 1
console.log(node1); // Output: Node { value: 1, next: null }

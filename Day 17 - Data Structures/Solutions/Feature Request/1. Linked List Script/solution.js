/**
 * Day 17 - Data Structures
 * 
 * Feature Request: Linked List Script
 *  - Write a script that implements a linked list with methods to add, remove, and display nodes.
 */


// Implement the Node class
class Node {
    // Constructor to initialize the Node with a value and next pointer
    constructor(value) {
        this.value = value; // Value of the node
        this.next = null; // Pointer to the next node
    }
}

// Implement the LinkedList class
class LinkedList {
    // Constructor to initialize the head of the linked list
    constructor() {
        this.head = null; // Head node of the linked list
    }

    // Method to add a node to the end of the linked list
    addNode(value) {
        // Create a new node with the given value
        const newNode = new Node(value);

        // Check if the linked list is empty (no head node)
        if (!this.head) {
            this.head = newNode;
        } else {
            // Start from the head of the linked list
            let current = this.head;

            // Traverse the linked list to find the last node
            while (current.next) {
                current = current.next;
            }
            // Add the new node to the end of the linked list
            current.next = newNode;
        }
    }

    // Method to remove a node from the end of the linked list
    removeNode() {
        // Check if the linked list is empty (no head node)
        if (!this.head) {
            return null;
        }

        // If there is only one node in the linked list
        let current = this.head;
        let previous = null;

        // Traverse the linked list to find the last node
        while (current.next) {
            previous = current;
            current = current.next;
        }

        // Remove the last node by updating the previous node's next pointer
        if (previous) {
            previous.next = null;
        } else {
            this.head = null;
        }
    }

    // Method to display all nodes in the linked list
    displayNodes() {
        // Start from the head of the linked list
        let current = this.head;

        // Array to store the elements of the linked list
        const elements = [];

        // Loop through the linked list and display the value of each node
        while (current) {
            elements.push(current.value); 
            current = current.next; // Move to the next node
        }

        // Output the elements separated by commas
        console.log(elements.join(', '));
    }
}

// Test the LinkedList class implementation
const linkedList = new LinkedList(); // Create a new linked list
linkedList.addNode(1); // Add node with value 1
linkedList.addNode(2); // Add node with value 2
linkedList.addNode(3); // Add node with value 3
linkedList.displayNodes(); // Output: 1, 2, 3

linkedList.removeNode(); // Remove the last node
linkedList.displayNodes(); // Output: 1, 2
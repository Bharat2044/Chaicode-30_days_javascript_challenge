/**
 * Day 17 - Data Structures
 * 
 * Feature Request: Queue Script
 *  - Write a script that implements a queue and simulates a printer queue.
 */


// Implement the Queue class
class Queue {
    // Constructor to initialize the queue
    constructor() {
        this.items = []; // Array to store the elements of the queue
    }

    // Method to add an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Method to get the size of the queue
    size() {
        return this.items.length;
    }
}

// Function to simulate a printer queue
function printerQueue(documents) {
    // Create a new queue to store the documents
    const queue = new Queue();

    // Add the documents to the queue
    for (let i = 0; i < documents.length; i++) {
        queue.enqueue(documents[i]);
    }

    // Print the documents in the order they were added to the queue
    while (!queue.isEmpty()) {
        console.log("Printing document:", queue.dequeue());
    }
}

// Test the printer queue simulation
const documents = ["Document1", "Document2", "Document3", "Document4"];
printerQueue(documents); 

// Add more documents to the queue
const moreDocuments = ["Document5", "Document6", "Document7"];

// Test the printer queue simulation with additional documents
printerQueue(moreDocuments); 
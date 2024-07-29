/**
 * Day 17 - Data Structures
 *
 * Activity 3 - Queue
 *  Task 5: Implement a `Queue` class with methods `enqueue` (add element), `dequeue` (remove element), and `front` (view the first element).
 */


// Implement the Queue class
class Queue {
  // Constructor to initialize the queue
  constructor() {
    this.queue = []; // Array to store elements of the queue
  }

  // Method to add an element to the end of the queue
  enqueue(element) {
    // Add the element to the end of the queue
    this.queue.push(element);
  }

  // Method to remove and return the element from the front of the queue
  dequeue() {
    // Check if the queue is empty (no elements), then return null
    if (this.queue.length === 0) {
      return "Queue is empty, you can't remove any element";
    }

    // Remove and return the element from the front of the queue
    return this.queue.shift();
  }

  // Method to view the element at the front of the queue without removing it
  front() {
    // Check if the queue is empty (no elements), then return null
    if (this.queue.length === 0) {
      return "Queue is empty, you can't view any element";
    }

    // Return the element at the front of the queue
    return this.queue[0];
  }
}

// Test the Queue class implementation
const queue = new Queue(); // Create a new queue

// Add elements to the queue
queue.enqueue(1); // Add element 1 to the queue
queue.enqueue(2); // Add element 2 to the queue
queue.enqueue(3); // Add element 3 to the queue

// View the first element of the queue
console.log(queue.front()); // Output: 1

// Remove elements from the queue
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: Queue is empty, you can't remove any element

// View the first element of the queue
console.log(queue.front()); // Output: Queue is empty, you can't view any element

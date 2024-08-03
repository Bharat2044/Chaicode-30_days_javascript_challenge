/**
 * Day 22 - LeetCode Medium
 * 
 * Feature Request: Add Two Numbers Script
 *  - Write a script that includes a function to solve the "Add Two Numbers” problem and logs the sum as a linked list.
 */


// Definition for singly-linked list
class ListNode {
    // Constructor to initialize the node with a value and a reference to the next node
    constructor(val = 0, next = null) {
        this.val = val; // Value of the node
        this.next = next; // Reference to the next node
    }
}

// Function to add two numbers as linked lists
function addTwoNumbers(l1, l2) {
    // Create a dummy node to hold the sum
    let dummy = new ListNode();

    // Initialize pointers for the linked lists and the current node
    let p = l1, q = l2, current = dummy;

    // Initialize carry to hold the carry value
    let carry = 0;
    
    // Loop through the linked lists until both are null
    while (p !== null || q !== null) {
        // Get the values of the nodes or 0 if the node is null
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;

        // Calculate the sum of the values and the carry
        let sum = carry + x + y;

        // Update the carry and the current node
        carry = Math.floor(sum / 10);
        // Add the sum to the current node
        current.next = new ListNode(sum % 10);

        // Move to the next node
        current = current.next;

        // Move to the next node in the linked lists if they are not null
        if (p !== null) p = p.next;
        // Move to the next node in the linked lists if they are not null
        if (q !== null) q = q.next;
    }
    
    // Add the carry to the current node if it is greater than 0
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    // Return the next node of the dummy node
    return dummy.next;
}

// Function to print the linked list
function printList(node) {
    // Create an array to hold the values of the linked list
    let arr = [];

    // Loop through the linked list and add the values to the array
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }

    // Log the values of the linked list
    console.log(arr.join(" -> "));
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);

// Log the sum as a linked list
printList(result); // Output: 7 -> 0 -> 8
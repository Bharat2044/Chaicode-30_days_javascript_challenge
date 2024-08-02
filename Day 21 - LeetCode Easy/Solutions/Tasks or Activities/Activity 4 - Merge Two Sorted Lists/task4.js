/**
 * Day 21 - LeetCode Easy
 * 
 * Activity 4 - Merge Two Sorted Lists
 *  - Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
 *      - Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
 *      - Create a few test cases with linked lists and log the merged list.
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to merge two sorted linked lists
const mergeTwoLists = (l1, l2) => {
    // Create a dummy node to hold the merged list
    const dummy = new ListNode(0);
    let current = dummy;

    // Loop until both lists are empty
    while (l1 !== null && l2 !== null) {
        // Compare the values of the two lists
        if (l1.val < l2.val) {
            // Add the smaller value to the merged list
            current.next = l1;
            l1 = l1.next;
        } else {
            // Add the smaller value to the merged list
            current.next = l2;
            l2 = l2.next;
        }

        // Move to the next node in the merged list
        current = current.next;
    }

    // Add the remaining nodes of the non-empty list
    current.next = l1 || l2;

    // Return the merged list
    return dummy.next;
};

// Function to create a linked list from an array
const createList = (arr) => {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
};

// Function to print the linked list
function printLinkedList(node) {
    let result = '';

    while (node) {
        result += node.val + ' -> ';
        node = node.next;
    }

    // Remove the extra ' -> ' from the end
    result = result.slice(0, result.length - 4);

    console.log(result);
}


// Test cases
// Create two sorted linked lists
const l1 = createList([1, 2, 4]); 
const l2 = createList([1, 3, 4]); 

// Merge the two lists
const mergedList = mergeTwoLists(l1, l2);

// Print the merged list
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
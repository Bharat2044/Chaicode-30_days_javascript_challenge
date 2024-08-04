/**
 * Day 23 - LeetCode Hard
 * 
 * Activity 2 - Merge k Sorted Lists
 *  - Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
 *      - Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
 *      - Create a few test cases with linked lists and log the merged list.
 */



class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode();
    let current = head;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return head.next; // Return the head node of the created linked list
}

// Priority Queue class implementation
class PriorityQueue {
    constructor(comparator = (a, b) => a.val < b.val) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    peek() {
        return this._heap[0];
    }
    add(value) {
        this._heap.push(value);
        this._siftUp();
    }
    poll() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > 0) {
            this._swap(0, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > 0 && this._greater(node, Math.floor((node - 1) / 2))) {
            this._swap(node, Math.floor((node - 1) / 2));
            node = Math.floor((node - 1) / 2);
        }
    }
    _siftDown() {
        let node = 0;
        while (
            (node * 2 + 1 < this.size() && this._greater(node * 2 + 1, node)) ||
            (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node))
        ) {
            let maxChild = (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node * 2 + 1)) ? node * 2 + 2 : node * 2 + 1;
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

// Function to merge k sorted linked lists
function mergeKLists(lists) {
    // Check if the input array is empty
    if (lists.length === 0) {
        return null;
    }

    // Initialize a new linked list
    let mergedList = new ListNode();
    let current = mergedList;

    // Create a priority queue to store the nodes
    let pq = new PriorityQueue((a, b) => a.val < b.val);

    // Add the head nodes of all the linked lists to the priority queue
    for (let list of lists) {
        if (list) {
            pq.add(list);
        }
    }

    // Merge the linked lists
    while (!pq.isEmpty()) {
        // Get the node with the smallest value
        let node = pq.poll();

        // Add the node to the merged list
        current.next = node;
        current = current.next;

        // Add the next node from the same list to the priority queue
        if (node.next) {
            pq.add(node.next);
        }
    }

    // Return the merged list
    return mergedList.next;
}

// Test cases
let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);

// Output the merged linked list
let mergedList = mergeKLists([list1, list2, list3]);

while (mergedList) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
}
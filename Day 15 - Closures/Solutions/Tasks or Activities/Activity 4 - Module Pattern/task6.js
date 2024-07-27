/**
 * Day 15 - Closures
 *
 * Activity 4 - Module Pattern
 *  - Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
 */


// Create a module for managing a collection of items
const itemModule = (() => {
  // Private variable to store the collection of items
  const items = [];

  // Public methods
  return {
    // Method to add an item to the collection
    addItem: (item) => {
      items.push(item);
    },

    // Method to remove an item from the collection
    removeItem: (item) => {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },

    // Method to list all items in the collection
    listItems: () => {
      return [...items];
    },
  };
})();

// Example usage
itemModule.addItem("Apple");
itemModule.addItem("Banana");
itemModule.addItem("Cherry");

console.log(itemModule.listItems()); // Output: ["Apple", "Banana", "Cherry"]

itemModule.removeItem("Banana");

console.log(itemModule.listItems()); // Output: ["Apple", "Cherry"]

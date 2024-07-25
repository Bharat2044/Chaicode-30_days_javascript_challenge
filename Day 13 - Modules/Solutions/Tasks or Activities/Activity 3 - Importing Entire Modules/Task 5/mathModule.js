// Constants
const PI = 3.14159;
const E = 2.71828;

// Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export all constants and functions as a single object
module.exports = {
    PI,
    E,
    add,
    subtract
};

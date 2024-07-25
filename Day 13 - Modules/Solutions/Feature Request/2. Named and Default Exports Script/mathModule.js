// Named exports
const PI = 3.14159;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Default export
module.exports = {
    PI,
    add,
    subtract,
    multiply: function(a, b) {
        return a * b;
    }
};
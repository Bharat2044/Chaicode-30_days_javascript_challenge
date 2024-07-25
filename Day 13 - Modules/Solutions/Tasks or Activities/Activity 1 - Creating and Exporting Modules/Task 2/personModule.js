// Create a person object with the following properties and methods:
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

// Export the person object
module.exports = person;
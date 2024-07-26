/**
 * Day 14 - Classes
 * 
 * Activity 5 - Private Fields (Optional)
 *  - Task 10: Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.
 */



// Define the class `Account`
class Account {
    // Define the private field `#balance`
    #balance = 0;

    // Define the method `deposit` to add money to the balance
    deposit(amount) {
        // Update the balance by adding the amount
        this.#balance += amount;
        // Log the updated balance
        console.log(`Deposited: ${amount}. Balance: ${this.#balance}`);
    }

    // Define the method `withdraw` to remove money from the balance
    withdraw(amount) {
        // Check if the balance is sufficient
        if (this.#balance >= amount) {
            // Update the balance by subtracting the amount
            this.#balance -= amount;
            // Log the updated balance
            console.log(`Withdrawn: ${amount}. Balance: ${this.#balance}`);
        } else {
            // Log an error message if the balance is insufficient
            console.log(`Insufficient balance. Balance: ${this.#balance}`);
        }
    }
}

// Create an instance of the class `Account`
const account = new Account();

// Try to access the private field `#balance`
// console.log(account.#balance); // Error: Private field '#balance' is not defined

// Deposit money into the account
account.deposit(100); // Output: Deposited: 100. Balance: 100

// Deposit money into the account
account.deposit(200); // Output: Deposited: 200. Balance: 300

// Withdraw money from the account
account.withdraw(50); // Output: Withdrawn: 50. Balance: 250

// Deposit more money into the account
account.deposit(500); // Output: Deposited: 500. Balance: 750

// Withdraw more money from the account
account.withdraw(300); // Output: Withdrawn: 300. Balance: 450

// Withdraw more money from the account
account.withdraw(500); // Output: Insufficient balance. Balance: 450
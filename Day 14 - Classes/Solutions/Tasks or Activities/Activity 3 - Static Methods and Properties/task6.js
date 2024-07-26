/**
 * Day 14 - Classes
 *
 * Activity 3 - Static Methods and Properties
 *  - Task 6: Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
 */


// Define the class `Person`
class Person {
  // Define the constructor
  constructor(name, age) {
    // Initialize the properties `name` and `age`
    this.name = name;
    this.age = age;
  }

  // Define a static method `genericGreet`
  static genericGreet() {
    // Return a generic greeting message
    return "Hello from the Person class!";
  }
}

// Define the class `Student` that extends the `Person` class
class Student extends Person {
  // Define a static property `studentCount` to keep track of the number of students created
  static studentCount = 0;

  // Define the constructor with an additional parameter `studentId`
  constructor(name, age, studentId) {
    // Call the superclass constructor
    super(name, age);
    // Initialize the property `studentId`
    this.studentId = studentId;
    
    // Increment the static property `studentCount`
    Student.studentCount += 1;
  }
}

// Log the total number of students
console.log(`Total students: ${Student.studentCount}`);

// Create an instance of the `Student` class
const student1 = new Student("Bharat", 21, "A123");

// Log the total number of students
console.log(`Total students: ${Student.studentCount}`);

// Create another instance of the `Student` class
const student2 = new Student("Deepak", 25, "B235");

// Log the total number of students
console.log(`Total students: ${Student.studentCount}`);

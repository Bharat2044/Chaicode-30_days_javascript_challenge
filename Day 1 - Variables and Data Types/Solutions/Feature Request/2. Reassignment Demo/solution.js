/**
 * Reassignment Demo:
 *  - Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
 */


let reassignableLet = "Bharat";
console.log('reassignableLet (initial):', reassignableLet);

reassignableLet = "Deepak";
console.log('reassignableLet (reassigned):', reassignableLet);


const nonReassignableConst = "Kumar";
console.log('nonReassignableConst:', nonReassignableConst);

// Uncomment the following line to observe the error
// nonReassignableConst = "Singh"; // This will cause an error: TypeError: Assignment to constant variable.

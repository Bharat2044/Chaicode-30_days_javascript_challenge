/**
 * Day 18 - Sorting Algorithms
 * 
 * Activity 2 - Searching Algorithms
 *  - Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
 */


// function to implement linear search algorithm
function linearSearch(arr, target) {

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        
        // if the current element is equal to the target value
        if (arr[i] === target) {
            // return the index of the target value
            return i;
        }
    }

    // if the target value is not found, return -1
    return -1;
}

// create an array of integers
let arr = [64, 34, 25, 12, 22, 11, 90];

// define the target value to search for in the array
let target = 22;

// call the linearSearch function to find the target value in the array
let index = linearSearch(arr, target);

// log the index of the target value 
if (index !== -1) {
    console.log(`The target value ${target} is found at index ${index}.`);
} else {
    console.log(`The target value ${target} is not found in the array.`);
}

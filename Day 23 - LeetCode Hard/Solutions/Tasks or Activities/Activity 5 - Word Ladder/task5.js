/**
 * Day 23 - LeetCode Hard
 * 
 * Activity 5 - Word Ladder
 *  - Task 5: Solve the "Word Ladder" problem on LeetCode.
 *      - Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
 *      - Log the length of the shortest transformation sequence for a few test cases.
 */



// Function to find the length of the shortest transformation sequence
function ladderLength(beginWord, endWord, wordList) {
    // Create a set of words from the word list
    let wordSet = new Set(wordList);
    
    // Check if the end word is not in the word set
    if (!wordSet.has(endWord)) return 0;
    
    // Initialize the queue with the begin word and the level
    let queue = [[beginWord, 1]];
    
    // Loop through the queue
    while (queue.length) {
        // Dequeue the current word and the level
        let [word, level] = queue.shift();
        
        // Check if the current word is equal to the end word
        if (word === endWord) return level;
        
        // Loop through each character in the word
        for (let i = 0; i < word.length; i++) {
            // Loop through each letter in the alphabet
            for (let j = 0; j < 26; j++) {
                // Get the new word by replacing the character at index i with the new letter
                let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                
                // Check if the new word is in the word set and enqueue the new word with the level
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    
    // Return 0 if there is no transformation sequence
    return 0;
}

// Test cases
let beginWord1 = "hit", endWord1 = "cog", wordList1 = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord1, endWord1, wordList1)); // Output: 5

let beginWord2 = "hit", endWord2 = "cog", wordList2 = ["hot","dot","dog","lot","log"];
console.log(ladderLength(beginWord2, endWord2, wordList2)); // Output: 0

let beginWord3 = "a", endWord3 = "c", wordList3 = ["a","b","c"];
console.log(ladderLength(beginWord3, endWord3, wordList3)); // Output: 2
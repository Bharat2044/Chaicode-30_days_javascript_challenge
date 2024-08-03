/**
 * Day 22 - LeetCode Medium
 * 
 * Feature Request: Group Anagrams Script
 *  - Write a script that includes a function to group anagrams and logs the grouped anagrams.
 */


// Function to group anagrams
function groupAnagrams(strs) {
    // Create a map to store the anagrams
    let map = new Map();
    
    // Loop through the strings
    for (let str of strs) {
        // Sort the string to get the key
        let key = str.split("").sort().join("");
        
        // Check if the key is in the map
        if (!map.has(key)) {
            // Add the key to the map with an empty array
            map.set(key, []);
        }
        
        // Add the string to the array of the key
        map.get(key).push(str);
    }
    
    // Return the values of the map
    return Array.from(map.values());
}


// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(groupAnagrams(["ab", "ba"])); // [["ab", "ba"]]
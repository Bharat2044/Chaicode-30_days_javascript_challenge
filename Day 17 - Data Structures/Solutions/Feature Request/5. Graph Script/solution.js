/**
 * Day 17 - Data Structures
 * 
 * Feature Request: Graph Script
 *  - Write a script that implements a graph and performs breadth-first search (optional).
 */


// Implement the Graph class
class Graph {
    // Constructor to initialize the graph
    constructor() {
        this.vertices = {}; // Object to store the vertices of the graph
    }

    // Method to add a vertex to the graph
    addVertex(vertex) {
        // If the vertex is not already in the graph, add it
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
        // Check if the vertices exist in the graph
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            return "Vertices not found in the graph";
        }

        // Add vertex2 to the adjacency list of vertex1
        this.vertices[vertex1].push(vertex2);
        // Add vertex1 to the adjacency list of vertex2 for undirected graph
        this.vertices[vertex2].push(vertex1);
    }

    // Method to perform breadth-first search on the graph
    bfs(startingVertex) {
        // Check if the starting vertex exists in the graph
        if (!this.vertices[startingVertex]) {
            console.log("Vertex not found in the graph");
            return;
        }

        // Create a queue to store the vertices to visit
        const queue = [startingVertex];
        // Create an object to store the visited vertices
        const visited = {};
        // Create an array to store the result of the BFS traversal
        const result = [];

        // Mark the starting vertex as visited
        visited[startingVertex] = true;

        // Loop until the queue is empty
        while (queue.length > 0) {
            // Dequeue a vertex from the queue
            const currentVertex = queue.shift();
            // Add the current vertex to the result
            result.push(currentVertex);

            // Visit all the adjacent vertices of the current vertex
            for (const adjacentVertex of this.vertices[currentVertex]) {
                // If the adjacent vertex has not been visited
                if (!visited[adjacentVertex]) {
                    // Mark the adjacent vertex as visited
                    visited[adjacentVertex] = true;
                    // Enqueue the adjacent vertex to visit later
                    queue.push(adjacentVertex);
                }
            }
        }

        // Print the result of the BFS traversal
        console.log(result);
    }
}

// Test the graph implementation
const graph = new Graph(); // Create a new graph

// Add vertices to the graph
graph.addVertex("A"); // Add vertex A
graph.addVertex("B"); // Add vertex B
graph.addVertex("C"); // Add vertex C
graph.addVertex("D"); // Add vertex D
graph.addVertex("E"); // Add vertex E

// Add edges between the vertices
graph.addEdge("A", "B"); // Add edge between A and B
graph.addEdge("A", "C"); // Add edge between A and C
graph.addEdge("B", "D"); // Add edge between B and D
graph.addEdge("C", "E"); // Add edge between C and E

// Perform breadth-first search starting from vertex A
graph.bfs("A"); // Output: ["A", "B", "C", "D", "E"]

// Perform breadth-first search starting from vertex C
graph.bfs("C"); // Output: ["C", "A", "E", "B", "D"]

// Perform breadth-first search starting from vertex E
graph.bfs("E"); // Output: ["E", "C", "A", "B", "D"]

// Perform breadth-first search starting from vertex F (non-existent)
graph.bfs("F"); // Output: "Vertex not found in the graph"
/**
 * Day 17 - Data Structures
 *
 * Activity 5 - Graph (Optional)
 *  Task 9: Implement a `Graph` class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
 */

// Implement the Graph class
class Graph {
  // Constructor to initialize the graph
  constructor() {
    this.vertices = {}; // Object to store the vertices of the graph
  }

  // Method to add a new vertex to the graph
  addVertex(vertex) {
    // Check if the vertex already exists in the graph
    if (this.vertices[vertex]) {
      return "Vertex already exists in the graph";
    }

    // Add the new vertex to the graph with an empty array of edges
    this.vertices[vertex] = [];
  }

  // Method to add an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    // Check if the vertices exist in the graph
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      return "Vertices do not exist in the graph";
    }

    // Add an edge between the two vertices (undirected graph)
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  // Method to perform a breadth-first search (BFS) on the graph
  bfs(startingVertex) {
    // Check if the starting vertex exists in the graph
    if (!this.vertices[startingVertex]) {
      console.log("Starting vertex does not exist in the graph");
      return;
    }

    // Initialize an empty queue for BFS
    const queue = [];

    // Set to store visited vertices
    const visited = new Set();

    // Add the starting vertex to the queue and mark it as visited
    queue.push(startingVertex);
    visited.add(startingVertex);

    // Array to store the BFS traversal path
    const traversalPath = [];

    // Perform BFS until the queue is empty
    while (queue.length > 0) {
      // Remove the first vertex from the queue
      const currentVertex = queue.shift();

      // Add the current vertex to the traversal path
      traversalPath.push(currentVertex);

      // Get the neighbors of the current vertex
      const neighbors = this.vertices[currentVertex];

      // Iterate over the neighbors of the current vertex
      for (let neighbor of neighbors) {
        // Check if the neighbor has not been visited
        if (!visited.has(neighbor)) {
          // Add the neighbor to the queue and mark it as visited
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    // Print the BFS traversal path
    console.log(traversalPath.join(", "));
  }
}

// Test the Graph class implementation
const graph = new Graph(); // Create a new graph

// Add vertices to the graph
graph.addVertex("A"); // Add vertex A
graph.addVertex("B"); // Add vertex B
graph.addVertex("C"); // Add vertex C
graph.addVertex("D"); // Add vertex D
graph.addVertex("E"); // Add vertex E

// Add edges between vertices
graph.addEdge("A", "B"); // Add edge between A and B
graph.addEdge("A", "C"); // Add edge between A and C
graph.addEdge("B", "D"); // Add edge between B and D
graph.addEdge("C", "E"); // Add edge between C and E

// Perform breadth-first search (BFS) starting from vertex A
graph.bfs("A"); // Output: A, B, C, D, E

// Perform breadth-first search (BFS) starting from vertex D
graph.bfs("D"); // Output: D, B, A, C, E

// Perform breadth-first search (BFS) starting from vertex F
graph.bfs("F"); // Output: Starting vertex does not exist in the graph

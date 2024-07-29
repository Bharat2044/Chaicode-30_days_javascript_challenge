/**
 * Day 17 - Data Structures
 *
 * Activity 5 - Graph (Optional)
 *  Task 10: Use the `Graph` class to represent a simple network and perform BFS to find the shortest path between two nodes.
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
      // Dequeue a vertex from the queue
      const currentVertex = queue.shift();

      // Add the current vertex to the traversal path
      traversalPath.push(currentVertex);

      // Visit all adjacent vertices of the current vertex
      for (const adjacentVertex of this.vertices[currentVertex]) {
        // If the adjacent vertex has not been visited
        if (!visited.has(adjacentVertex)) {
          // Mark the adjacent vertex as visited and add it to the queue
          visited.add(adjacentVertex);
          queue.push(adjacentVertex);
        }
      }
    }

    // Return the BFS traversal path
    return traversalPath;
  }

  // Method to find the shortest path between two vertices using BFS
  shortestPath(startingVertex, targetVertex) {
    // Check if the starting and target vertices exist in the graph
    if (!this.vertices[startingVertex] || !this.vertices[targetVertex]) {
      console.log("Starting or target vertex does not exist in the graph");
      return;
    }

    // Initialize an empty queue for BFS
    const queue = [];

    // Set to store visited vertices
    const visited = new Set();

    // Map to store the parent of each vertex in the shortest path
    const parentMap = {};

    // Add the starting vertex to the queue and mark it as visited
    queue.push(startingVertex);

    // Mark the starting vertex as visited
    visited.add(startingVertex);

    // Perform BFS until the queue is empty or the target vertex is found
    while (queue.length > 0) {
      // Dequeue a vertex from the queue
      const currentVertex = queue.shift();

      // Visit all adjacent vertices of the current vertex
      for (const adjacentVertex of this.vertices[currentVertex]) {
        // If the adjacent vertex has not been visited
        if (!visited.has(adjacentVertex)) {
          // Mark the adjacent vertex as visited
          visited.add(adjacentVertex);

          // Set the parent of the adjacent vertex to the current vertex
          parentMap[adjacentVertex] = currentVertex;

          // If the target vertex is found, construct the shortest path
          if (adjacentVertex === targetVertex) {
            return this.constructPath(parentMap, startingVertex, targetVertex);
          }

          // Add the adjacent vertex to the queue
          queue.push(adjacentVertex);
        }
      }
    }

    // If the target vertex is not reachable from the starting vertex
    console.log("No path found between the starting and target vertices");
    return;
  }

  // Helper method to construct the shortest path from the parent map
  constructPath(parentMap, startingVertex, targetVertex) {
    const shortestPath = [targetVertex];

    // Starting from the target vertex, follow the parent pointers to the starting vertex
    let currentVertex = targetVertex;

    while (currentVertex !== startingVertex) {
      currentVertex = parentMap[currentVertex];
      shortestPath.unshift(currentVertex);
    }

    // Return the shortest path
    return shortestPath;
  }
}


// Test the Graph class implementation
const network = new Graph(); // Create a new network graph

// Add vertices to the network
network.addVertex("A"); // Add vertex A
network.addVertex("B"); // Add vertex B
network.addVertex("C"); // Add vertex C
network.addVertex("D"); // Add vertex D
network.addVertex("E"); // Add vertex E
network.addVertex("F"); // Add vertex F

// Add edges between vertices in the network
network.addEdge("A", "B"); // Add edge between A and B
network.addEdge("A", "C"); // Add edge between A and C
network.addEdge("B", "D"); // Add edge between B and D
network.addEdge("C", "E"); // Add edge between C and E
network.addEdge("D", "F"); // Add edge between D and F

// Perform BFS on the network starting from vertex A
const bfsTraversal = network.bfs("A");
console.log("BFS Traversal:", bfsTraversal.join(", ")); // Output: BFS Traversal: A, B, C, D, E, F

// Find the shortest path between vertices A and F
const shortestPath = network.shortestPath("A", "F");
console.log("Shortest Path:", shortestPath.join(" -> ")); // Output: Shortest Path: A -> B -> D -> F

// Find the shortest path between vertices A and E
const shortestPathAE = network.shortestPath("A", "E");
console.log("Shortest Path:", shortestPathAE.join(" -> ")); // Output: Shortest Path: A -> C -> E

// Find the shortest path between vertices A and G (non-existent vertex)
network.shortestPath("A", "G"); // Output: Starting or target vertex does not exist in the graph

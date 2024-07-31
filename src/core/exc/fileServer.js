/*
Simple File Server: Write a basic Node.js application that acts as a simple file server. 
It should be able to serve static files from a specified directory when requested through a specific route (e.g., /).

*/
const http = require('http');
const fs = require('fs');

const port = 8080;
const directory = './public'; // Replace with your directory path

http.createServer((req, res) => {
  // Your code here to handle requests and serve files
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
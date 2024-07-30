// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments data
const comments = require('./comments');

// Set up the server to handle requests
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Run the server with node comments.js
// The server is now running and will return the comments data when you visit http://localhost:3000/comments in your browser.
// You can also use an API testing tool like Postman to test the server.
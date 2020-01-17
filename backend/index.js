const express = require('express'); // Import express (server base)

const app = express();  // Start app

// Main route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define app port
app.listen(3333);
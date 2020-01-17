const express = require('express'); // Import express (server base)

const app = express();  // Start app

// Accept JSON requisitions
app.use(express.json());

// Main route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define app port
app.listen(3333);
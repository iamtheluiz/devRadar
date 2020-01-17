const express = require('express'); // Import express (server base)
const mongoose = require('mongoose'); // Connection with MongoDB

const routes = require('./routes'); // Get application routes

const port = 3333;  // Application port
const app = express();  // Start app

mongoose.connect('mongodb+srv://devRadar:5KeYF1o0VnLZ0nCZ@cluster0-msvvd.mongodb.net/devRadar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // Connect to MongoDB Atlas

// Accept JSON requisitions
app.use(express.json());

// Import application routes
app.use(routes);

// Define app port
app.listen(port);

console.log(`Application listening to localhost:${port}`);
const express = require('express'); // Import express (server base)
const mongoose = require('mongoose'); // Connection with MongoDB
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const routes = require('./routes'); // Get application routes

const port = 3333;  // Application port
const app = express();  // Start app
const server = http.Server(app);  // HTTP Server

setupWebSocket(server);

mongoose.connect('mongodb+srv://devRadar:5KeYF1o0VnLZ0nCZ@cluster0-msvvd.mongodb.net/devRadar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}); // Connect to MongoDB Atlas

// Enable cross origin request 
app.use(cors());

// Accept JSON requisitions
app.use(express.json());

// Import application routes
app.use(routes);

// Define app port
server.listen(port);

console.log(`Application listening to localhost:${port}`);
const { Router } = require('express');

const routes = Router();  // Store application routes

// Main route
routes.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = routes;
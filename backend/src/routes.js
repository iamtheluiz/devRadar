const { Router } = require('express');

// Controllers
const DevController = require('./controllers/DevController');

const routes = Router();  // Store application routes

routes.post('/devs', DevController.store);

module.exports = routes;
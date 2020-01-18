const { Router } = require('express');

// Controllers
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();  // Store application routes

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:id', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;
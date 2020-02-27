const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Mostrar todos os devs
routes.get('/devs', DevController.index);

// Cadastrar um dev
routes.post('/devs', DevController.store);

// Deletar um dev
routes.delete('/devs', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;
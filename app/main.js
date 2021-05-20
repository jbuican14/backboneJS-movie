const Backbone = require('backbone');
const $ = require('jquery-untouched');
Backbone.$ = $;

const MoviesRouter = require('./routers/movies');

module.exports = { Backbone: Backbone, MoviesRouter: MoviesRouter };

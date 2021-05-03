const Backbone = require('backbone');
const $ = require('jquery-untouched');
Backbone.$ = $;

const MoviesRouter = require('./routers/movies');

$(document).ready(() => {
  console.log('init');
  const router = new MoviesRouter({ el: $('#movies') });

  Backbone.history.start({
    pushState: true,
    root: '/',
  });
});

const Backbone = require('backbone');
const _ = require('underscore');

// data
const Movies = require('collections/movies');
const data = require('../../movies.json');
const movies = new Movies(data);

//views
const Layout = require('views/layout');
// const MoviesList = require('../views/moviesList');

const MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id': 'selectMovie',
    '': 'showMain',
  },
  selectMovie: function (id) {
    this.movies.resetSelected();
    // this.moviesList.render();
    this.movies.selectByID(id);
    this.layout.setDetails(this.movies.get(id));
  },
  showMain: function () {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function (options) {
    this.movies = movies;

    this.layout = Layout.getInstance({
      el: '#movies',
      router: this,
    });
    this.layout.render();
  },
});

module.exports = MoviesRouter;

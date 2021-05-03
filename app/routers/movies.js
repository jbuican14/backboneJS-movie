const Backbone = require('backbone');
const _ = require('underscore');

// data
const Movies = require('collections/movies');
const data = require('../../movies.json');
const movies = new Movies(data);

//views
const MoviesList = require('../views/moviesList');

const MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id': 'selectMovie',
    '': 'showMain',
  },
  selectMovie: function (id) {
    this.moviesList.render();
    this.movies.selectByID(id);
  },
  showMain: function () {
    this.moviesList.render();
  },

  initialize: function (options) {
    this.movies = movies;
    // this.moviesList = new MoviesList({
    //   el: options.el,
    //   collection: movies,
    // });

    this.layout = Layout.getInstance({
      el: '#movies',
      router: this,
    });
    this.layout.render();

    // _.extend(this.moviesList, { router: this });
    // this.moviesList.render();
  },
});

module.exports = MoviesRouter;

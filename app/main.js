const Backbone = require('backbone');
const Movies = require('collections/movies');
const data = require('../movies.json');
const Monitor = require('./monitor');
const MoviesList = require('views/moviewsList');

// module.exports = function () {
//   return Backbone;
// };
const movies = new Movies(data);
const monitor = new Monitor(movies);

module.exports = {
  movies: movies,
  MovieView: this.MovieView,
  MoviesList: MoviesList,
};

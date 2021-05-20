var Backbone = require('backbone');
var Movie = require('models/movie');
var _ = require('underscore');

var Movies = Backbone.Collection.extend({
  model: Movie,

  sortByTitle: function () {
    return this.sortBy('title');
  },

  sortByRating: function () {
    let sorted = this.sortBy((m) => {
      return 10 - m.get('rating');
    });

    return sorted;
  },

  sortByShowtime: function () {
    return this.sortBy('showtime');
  },
});

module.exports = Movies;

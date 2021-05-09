const Backboone = require('backbone');
const _ = require('underscore');

MovieByTitle = Backbone.Collection.extend({
  sortByTitle: function () {
    return this.sortBy('title');
  },

  log: function () {
    _.each(this.toJSON(), function (movie) {
      const showtime = new Date(movie.showtime * 1000);
      console.log(
        `${movie.title}  ${showtime.toLocaleString()} ( ${movie.showtime} )`
      );
    });
  },
});

module.exports = moviesByTitle;

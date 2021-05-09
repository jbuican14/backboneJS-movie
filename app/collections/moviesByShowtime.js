const Backbone = require('backbone');
const _ = require('underscore');
const Movie = require('models/movie');

const MoviesByShowtime = Backbone.Collection.extend({
  model: Movie,

  // comparator: function (m) { // doesn't work
  //   console.log(m);
  //   return -m.toShowtimeDate();
  // },

  log: function () {
    console.log(this.models);
    this.each(function (movie) {
      console.log(
        `${movie.get('title')}  ${movie.showtimeToString()}  ( ${movie.get(
          'showtime'
        )} )`
      );
    });
  },
});

module.exports = MoviesByShowtime;

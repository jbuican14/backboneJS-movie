const Backbone = require('backbone');
const SortView = Backbone.View.extend({
  events: {
    'click #by_title': 'sortyByTitle',
    'click #by_rating': 'sortyByRating',
    'click #by_showtime': 'sortyByshowTime',
  },

  sortByTitle: function (e) {
    this.movies.reset(this.movies.sortByTitle());
  },

  sortByRating: function (e) {
    this.movies.reset(this.movies.sortByRating());
  },

  sortByShowtime: function (e) {
    this.movies.reset(this.movies.sortByShowtime());
  },

  initialize: function () {
    this.movies = this.collection;
  },
});

module.exports = SortView;

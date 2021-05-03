const Backbone = require('backbone');
const _ = require('underscore');

const MovieView = require('views/movie');
const MoviesList = Backbone.View.extend({
  tagName: 'section',

  render: function () {
    const that = this;
    const moviesView = this.collection.map(
      (movie) =>
        new MovieView({ model: movie, router: that.router }).render().el
    );
    this.$el.html(moviesView);
    return this;
  },

  initialize: function (options) {
    this.router = options.router;
  },
});

module.exports = MoviesList;

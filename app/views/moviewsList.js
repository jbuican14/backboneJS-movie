const Backbone = require('backbone');

//model track selected movie
const Selection = require('models/selection');

// UI for selecting a movie
const MovieView = require('views/movie');
const MoviesList = Backbone.View.extend({
  tagName: 'section',

  render: function() {
    const that = this;

    const moviesView = this.collection.map((movie)=> {
      return (new MovieView({model: movie, selection: that.selection})).render().el;
    });
    this.$el.html(moviesView);
    return this;
  },

  initialize: function() {
    this.selection = new Selection();
  }
});

module.exports = MoviesList;
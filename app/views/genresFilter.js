const Backbone = require('backbone');
// const genresTemplate = require('../templates/genres.jst');
// for eco
const genresTemplate = require('../templates/genres.eco');

// the UI for selecting a Movie Category
const GenresView = Backbone.View.extend({
  template: genresTemplate,

  render: function () {
    this.$el.html(this.template({ genres: this.genres }));
    return this;
  },

  initialize: function () {
    this.genres = ['Action', 'Drama', 'Comedy'];
  },
});

module.exports = GenresView;

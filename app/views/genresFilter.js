const Backbone = require('backbone');
const genresTemplate = require('../templates/genres.jst');

// the UI for selecting a Movie Category
const GenresView = Backbone.View.extend({
  template: genresTemplate,

  rener: function () {
    this.$el.html(this.template({ genres: this.genres }));
    return this;
  },

  initialize: function () {
    this.genres = ['Action', 'Drama', 'Comedy'];
  },
});

module.exports = GenresView;

const Backbone = require('backbone');
const Movie = require('models/movie');
const Movies = Backbone.Collection.extend({
  model: Movie,
  // Unselect all models
  resetSelected: function () {
    this.each(function (model) {
      model.set({ selected: false });
    });
  },

  // Select a specific model from the collecton
  selectByID: function (id) {
    this.resetSelected();
    const movie = this.get(id);
    movie.set({ selected: true });

    return movie.id;
  },
});

module.exports = Movies;

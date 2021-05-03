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

// Test case
// browserify -r ./app/main.js:app > static/bundle.js (on the root)
// moives.selectByID(2)
// movies.get(2).get('selected'); --> retrieve the model from the collection and then
//  retrieves the value of the 'selected' attribute from the model

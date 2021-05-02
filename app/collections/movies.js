const Backbone = require('backbone');
const Movie = require('models/movie');
const Movies = Backbone.Collection.extend({
  model: Movie,
  // // Unselect all models
  // resetSelected = function() {
  //   this.each(function(model) {
  //     model.set({"selected": false}, {silent: true});
  //   });
  // }
});

module.exports = Movies;

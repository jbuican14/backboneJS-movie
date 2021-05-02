const Backbone = require('Backbone');
const Movie = Backbone.Model.extend({
  defaults: {
    title: 'default',
    year: 0,
    description: 'empty',
    selected: false,
  },
});
module.exports = Movie;

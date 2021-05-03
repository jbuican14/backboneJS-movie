const Backbone = require('Backbone');
const Movie = Backbone.Model.extend({
  defaults: {
    title: 'default',
    year: 0,
    description: 'empty',
  },
});
module.exports = Movie;

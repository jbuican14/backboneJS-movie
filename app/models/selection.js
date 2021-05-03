const Backbone = require('backbone');
const Selection = Backbone.Model.extend({
  defaults: {
    'selected': 1
  }
});

module.exports = Selection; 
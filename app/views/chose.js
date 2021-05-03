const Backbone = require('backbone');

const ChoseView = Backbone.View.extend({
  template:
    '<h1>Welcome to Freeworld Cinema</h1>\
              <h2>Please pick a movie</h2>',

  class: 'details',

  render: function () {
    this.$el.html(this.template);
    return this;
  },
});

module.exports = ChoseView;
